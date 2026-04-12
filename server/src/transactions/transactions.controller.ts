import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ListTransactionsDto } from './dto/list-transactions.dto';
import { StatsQueryDto } from './dto/stats-query.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  // Must be declared before /:transactionId to prevent "stats" matching as an ID
  @Get('stats')
  getStats(@Query() query: StatsQueryDto) {
    return this.transactionsService.getStats(query);
  }

  @Get()
  list(@Query() query: ListTransactionsDto) {
    return this.transactionsService.list(query);
  }

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateTransactionDto) {
    return this.transactionsService.create(dto);
  }

  @Put(':transactionId')
  update(@Param('transactionId') transactionId: string, @Body() dto: UpdateTransactionDto) {
    return this.transactionsService.update(transactionId, dto);
  }

  @Delete(':transactionId')
  @HttpCode(204)
  delete(@Param('transactionId') transactionId: string) {
    return this.transactionsService.delete(transactionId);
  }
}
