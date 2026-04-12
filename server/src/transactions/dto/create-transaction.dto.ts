import { IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID('4')
  categoryId!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsNumber()
  @Min(0.01)
  amount!: number;

  @IsISO8601()
  date!: string;
}
