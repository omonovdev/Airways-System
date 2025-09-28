import { IsString, IsUUID, Length, IsNotEmpty } from 'class-validator';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @IsUUID()
  @IsNotEmpty()
  countryId: string;
}
