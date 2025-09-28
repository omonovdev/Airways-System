import { IsString, Length, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  code: string;

  @IsUUID()
  @IsNotEmpty()
  countryId: string;
}
