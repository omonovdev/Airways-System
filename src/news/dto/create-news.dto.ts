import { IsString, Length } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @Length(5, 200)
  title: string;

  @IsString()
  @Length(10, 2000)
  content: string;
}
