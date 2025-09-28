import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airport } from './entities/airport.entity';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Airport])],
  controllers: [AirportController],
  providers: [AirportService],
  exports: [AirportService],
})
export class AirportModule {}
