import { Controller, Delete, HttpCode, Inject, Post } from '@nestjs/common';
import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';
import { KNEX_CONNECTION } from '../database/database.provider';
import { SEED_CATEGORIES, SEED_TRANSACTIONS } from './seed-data';

@Controller('dev')
export class DevController {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  @Post('seed')
  @HttpCode(201)
  async seed() {
    await this.knex('transactions').delete();
    await this.knex('categories').delete();

    const categoryIds: Record<string, string> = {};

    for (const cat of SEED_CATEGORIES) {
      const id = uuidv4();
      categoryIds[cat.name] = id;
      await this.knex('categories').insert({ id, name: cat.name, color: cat.color });
    }

    const now = Date.now();
    for (const tx of SEED_TRANSACTIONS) {
      const id = uuidv4();
      const date = new Date(now - tx.daysAgo * 24 * 60 * 60 * 1000);
      await this.knex('transactions').insert({
        id,
        category_id: categoryIds[tx.categoryName],
        name: tx.name,
        amount: tx.amount,
        date,
      });
    }

    return {
      categories: SEED_CATEGORIES.length,
      transactions: SEED_TRANSACTIONS.length,
    };
  }

  @Delete('seed')
  @HttpCode(204)
  async clear() {
    await this.knex('transactions').delete();
    await this.knex('categories').delete();
  }
}
