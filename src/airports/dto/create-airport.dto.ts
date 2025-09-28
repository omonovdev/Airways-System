import { IsString, IsUUID, Length } from 'class-validator';

export class CreateAirportDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsUUID()
  cityId: string;

  @IsString()
  @Length(2, 10)
  code: string;
}
