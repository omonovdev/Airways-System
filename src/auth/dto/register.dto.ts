import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsString,
  Length,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  password: string;

  @IsString()
  @Length(7, 15)
  phone: string;
}
