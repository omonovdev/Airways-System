import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plane } from './entities/plane.entity';
import { Company } from '../companies/entities/company.entity';
import { PlaneService } from './plane.service';
import { PlaneController } from './plane.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plane, Company])],
  controllers: [PlaneController],
  providers: [PlaneService],
  exports: [PlaneService],
})
export class PlaneModule {}
