import { IsString, IsUUID, Length, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateSeatDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  seatNumber: string;

  @IsUUID()
  @IsNotEmpty()
  planeId: string;

  @IsUUID()
  @IsNotEmpty()
  classId: string;

  @IsBoolean()
  isAvailable: boolean = true;
}
