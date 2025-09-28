import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('flights')
@UseGuards(JwtAuthGuard)
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  create(@Body() dto: CreateFlightDto) {
    return this.flightService.create(dto);
  }

  @Get()
  findAll() {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFlightDto) {
    return this.flightService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flightService.remove(id);
  }
}
