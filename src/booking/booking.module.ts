import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Seat } from '../seats/entities/seat.entity';
import { Plane } from '../planes/entities/plane.entity';
import { Company } from '../companies/entities/company.entity';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Class } from 'src/classes/entities/class.entity';
import { Flight } from 'src/flight/entities/flight.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, User, Seat, Plane, Company, Class, Flight])],
  providers: [BookingService],
  controllers: [BookingController],
  exports: [BookingService],
})
export class BookingModule {}
