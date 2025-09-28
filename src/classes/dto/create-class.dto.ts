import { IsEnum, IsNumber, Min } from 'class-validator';
import { ClassType } from '../entities/class.entity';

export class CreateClassDto {
  @IsEnum(ClassType)
  name: ClassType;

  @IsNumber()
  @Min(0)
  price: number;
}
