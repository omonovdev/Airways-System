import { IsUUID, IsDateString, IsEnum, IsNotEmpty } from 'class-validator';
import { FlightStatus } from '../entities/flight.entity';

export class CreateFlightDto {
  @IsUUID()
  planeId: string;

  @IsUUID()
  @IsNotEmpty()
  fromAirportId: string;

  @IsUUID()
  @IsNotEmpty()
  toAirportId: string;

  @IsDateString()
  @IsNotEmpty()
  departureTime: string;

  @IsDateString()
  @IsNotEmpty()
  arrivalTime: string;

  @IsEnum(FlightStatus)
  @IsNotEmpty()
  status: FlightStatus;
}
