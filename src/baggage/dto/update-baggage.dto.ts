import {
  IsUUID,
  IsNumber,
  IsString,
  Length,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateBaggageDto {
  @IsUUID()
  @IsOptional()
  bookingId?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  weight?: number;

  @IsString()
  @Length(2, 50)
  @IsOptional()
  type?: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  price?: number;
}
