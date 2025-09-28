import { IsString, IsUUID, Length, IsInt, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  flightId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @Length(5, 1000)
  comment: string;
}
