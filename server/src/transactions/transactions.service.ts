import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';
import { KNEX_CONNECTION } from '../database/database.provider';
import {
  AppBadRequestException,
  AppNotFoundException,
} from '../common/exceptions/app-exceptions';
import { CategoriesService } from '../categories/categories.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ListTransactionsDto } from './dto/list-transactions.dto';
import { StatsQueryDto } from './dto/stats-query.dto';

const PAGE_SIZE = 20;

export interface Transaction {
  id: string;
  categoryId: string;
  name: string | null;
  amount: number;
  date: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  nextCursor: string | null;
}

export interface CategoryStat {
  categoryId: string;
  sum: number;
}

export interface CadenceStat {
  fromDay: string;
  categories: CategoryStat[];
}

interface TransactionRow {
  id: string;
  category_id: string;
  name: string | null;
  amount: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
}

function mapRow(row: TransactionRow): Transaction {
  return {
    id: row.id,
    categoryId: row.category_id,
    name: row.name ?? null,
    amount: parseFloat(row.amount),
    date: new Date(row.date).toISOString(),
  };
}

interface Cursor {
  date: string;
  id: string;
}

function encodeCursor(cursor: Cursor): string {
  return Buffer.from(JSON.stringify(cursor)).toString('base64');
}

function decodeCursor(encoded: string): Cursor {
  return JSON.parse(Buffer.from(encoded, 'base64').toString('utf8')) as Cursor;
}

function bucketExpression(cadence: 'day' | 'week' | 'month', knex: Knex): Knex.Raw {
  switch (cadence) {
    case 'day':
      return knex.raw('DATE(`date`) AS bucket');
    case 'week':
      return knex.raw('DATE(`date` - INTERVAL WEEKDAY(`date`) DAY) AS bucket');
    case 'month':
      return knex.raw("DATE_FORMAT(`date`, '%Y-%m-01') AS bucket");
  }
}

@Injectable()
export class TransactionsService {
  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex: Knex,
    private readonly categoriesService: CategoriesService,
  ) {}

  async list(dto: ListTransactionsDto): Promise<PaginatedResponse<Transaction>> {
    let query = this.knex<TransactionRow>('transactions')
      .orderBy([
        { column: 'date', order: 'desc' },
        { column: 'id', order: 'desc' },
      ])
      .limit(PAGE_SIZE + 1);

    if (dto.categoryId) {
      query = query.where('category_id', dto.categoryId);
    }

    if (dto.cursor) {
      const { date, id } = decodeCursor(dto.cursor);
      query = query.where(
        this.knex.raw('(`date` < ? OR (`date` = ? AND `id` < ?))', [date, date, id]),
      );
    }

    const rows = await query;

    if (rows.length > PAGE_SIZE) {
      const pageRows = rows.slice(0, PAGE_SIZE);
      const last = pageRows[PAGE_SIZE - 1];
      const nextCursor = encodeCursor({ date: new Date(last.date).toISOString(), id: last.id });
      return { data: pageRows.map(mapRow), nextCursor };
    }

    return { data: rows.map(mapRow), nextCursor: null };
  }

  async create(dto: CreateTransactionDto): Promise<Transaction> {
    const category = await this.categoriesService.findById(dto.categoryId);
    if (!category) {
      throw new AppNotFoundException(`Category with id '${dto.categoryId}' not found`);
    }

    const id = uuidv4();
    await this.knex('transactions').insert({
      id,
      category_id: dto.categoryId,
      name: dto.name ?? null,
      amount: dto.amount,
      date: new Date(dto.date),
    });

    const row = await this.knex<TransactionRow>('transactions').where({ id }).first();
    return mapRow(row!);
  }

  async update(id: string, dto: UpdateTransactionDto): Promise<Transaction> {
    const existing = await this.knex<TransactionRow>('transactions').where({ id }).first();
    if (!existing) {
      throw new AppNotFoundException(`Transaction with id '${id}' not found`);
    }

    const category = await this.categoriesService.findById(dto.categoryId);
    if (!category) {
      throw new AppNotFoundException(`Category with id '${dto.categoryId}' not found`);
    }

    await this.knex('transactions').where({ id }).update({
      category_id: dto.categoryId,
      name: dto.name ?? null,
      amount: dto.amount,
      date: new Date(dto.date),
    });

    const row = await this.knex<TransactionRow>('transactions').where({ id }).first();
    return mapRow(row!);
  }

  async delete(id: string): Promise<void> {
    const existing = await this.knex<TransactionRow>('transactions').where({ id }).first();
    if (!existing) {
      throw new AppNotFoundException(`Transaction with id '${id}' not found`);
    }
    await this.knex('transactions').where({ id }).delete();
  }

  async getStats(dto: StatsQueryDto): Promise<CadenceStat[]> {
    if (dto.from > dto.until) {
      throw new AppBadRequestException('from must not be after until');
    }

    const fromDatetime = `${dto.from} 00:00:00`;
    const untilDatetime = `${dto.until} 23:59:59`;

    const bucketExpr = bucketExpression(dto.cadence, this.knex);

    const rows = await this.knex('transactions')
      .select(
        bucketExpr,
        this.knex.raw('`category_id`'),
        this.knex.raw('SUM(`amount`) AS `sum`'),
      )
      .whereBetween('date', [fromDatetime, untilDatetime])
      .groupByRaw('bucket, `category_id`')
      .orderBy('bucket', 'asc');

    const bucketMap = new Map<string, CategoryStat[]>();
    for (const row of rows as Array<{ bucket: string; category_id: string; sum: string }>) {
      const bucket = row.bucket;
      if (!bucketMap.has(bucket)) {
        bucketMap.set(bucket, []);
      }
      bucketMap.get(bucket)!.push({
        categoryId: row.category_id,
        sum: parseFloat(row.sum),
      });
    }

    return Array.from(bucketMap.entries()).map(([fromDay, categories]) => ({
      fromDay,
      categories,
    }));
  }
}
