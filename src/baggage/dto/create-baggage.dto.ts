import {
  IsUUID,
  IsNumber,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBaggageDto {
  @IsUUID()
  @IsNotEmpty()
  bookingId: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;


  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  weight: number;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  type: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;
}
