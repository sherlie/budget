import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.string('id', 36).notNullable().primary();
    table.string('category_id', 36).notNullable();
    table.string('name', 255).nullable();
    table.decimal('amount', 12, 2).notNullable();
    table.datetime('date').notNullable();
    table.datetime('created_at').notNullable().defaultTo(knex.fn.now());
    table.datetime('updated_at').notNullable().defaultTo(knex.fn.now());

    table.index(['category_id'], 'idx_transactions_category_id');
    table.index(['date'], 'idx_transactions_date');
    table
      .foreign('category_id', 'fk_transactions_category')
      .references('id')
      .inTable('categories');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions');
}
