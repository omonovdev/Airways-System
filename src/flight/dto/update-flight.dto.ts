import { IsUUID, IsDateString, IsOptional, IsEnum } from 'class-validator';
import { FlightStatus } from '../entities/flight.entity';

export class UpdateFlightDto {
  @IsOptional()
  @IsUUID()
  planeId?: string;

  @IsOptional()
  @IsUUID()
  fromAirportId?: string;

  @IsOptional()
  @IsUUID()
  toAirportId?: string;

  @IsOptional()
  @IsDateString()
  departureTime?: string;

  @IsOptional()
  @IsDateString()
  arrivalTime?: string;

  @IsOptional()
  @IsEnum(FlightStatus)
  status?: FlightStatus;
}
