import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { City } from '../cities/entities/city.entity';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Country, City])],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
