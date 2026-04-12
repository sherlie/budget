import { IsOptional, IsString, IsUUID } from 'class-validator';

export class ListTransactionsDto {
  @IsUUID('4')
  @IsOptional()
  categoryId?: string;

  @IsString()
  @IsOptional()
  cursor?: string;
}
