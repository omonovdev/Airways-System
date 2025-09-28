import { IsUUID, IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsUUID()
  flightId?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsUUID()
  seatId?: string;  
}
