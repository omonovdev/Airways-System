import { IsUUID, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 255)
  message: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  type: string;
}
