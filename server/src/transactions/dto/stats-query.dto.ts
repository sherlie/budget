import { IsDateString, IsIn } from 'class-validator';

export class StatsQueryDto {
  @IsIn(['day', 'week', 'month'])
  cadence!: 'day' | 'week' | 'month';

  @IsDateString()
  from!: string;

  @IsDateString()
  until!: string;
}
