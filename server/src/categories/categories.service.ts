import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';
import { KNEX_CONNECTION } from '../database/database.provider';
import {
  AppNotFoundException,
} from '../common/exceptions/app-exceptions';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

export interface Category {
  id: string;
  name: string;
  color: string | null;
}

interface CategoryRow {
  id: string;
  name: string;
  color: string | null;
  created_at: Date;
  updated_at: Date;
}

function mapRow(row: CategoryRow): Category {
  return {
    id: row.id,
    name: row.name,
    color: row.color ?? null,
  };
}

@Injectable()
export class CategoriesService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async findAll(): Promise<Category[]> {
    const rows = await this.knex<CategoryRow>('categories').orderBy('name', 'asc');
    return rows.map(mapRow);
  }

  async findById(id: string): Promise<Category | null> {
    const row = await this.knex<CategoryRow>('categories').where({ id }).first();
    return row ? mapRow(row) : null;
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    const id = uuidv4();
    await this.knex('categories').insert({
      id,
      name: dto.name,
      color: dto.color ?? null,
    });
    const row = await this.knex<CategoryRow>('categories').where({ id }).first();
    return mapRow(row!);
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new AppNotFoundException(`Category with id '${id}' not found`);
    }
    await this.knex('categories').where({ id }).update({
      name: dto.name,
      color: dto.color ?? null,
    });
    const row = await this.knex<CategoryRow>('categories').where({ id }).first();
    return mapRow(row!);
  }

  async delete(id: string): Promise<void> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new AppNotFoundException(`Category with id '${id}' not found`);
    }
    await this.knex('categories').where({ id }).delete();
  }
}
