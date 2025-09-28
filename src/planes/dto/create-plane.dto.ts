import { IsString, IsUUID, IsInt, Min, Length } from 'class-validator';

export class CreatePlaneDto {
  @IsString()
  @Length(2, 50)
  model: string;

  @IsUUID()
  companyId: string;

  @IsInt()
  @Min(1)
  seatsCount: number;
}
