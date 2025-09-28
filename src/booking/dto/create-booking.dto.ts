import { IsUUID, IsString, IsNumber, IsNotEmpty } from 'class-validator';
export class CreateBookingDto {
  @IsUUID()
  @IsNotEmpty()
  seatId: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  flightId: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
