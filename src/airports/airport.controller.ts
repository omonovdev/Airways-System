import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AirportService } from './airport.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminOnlyGuard } from '../auth/guards/admin-only.guard';

@Controller('airports')
@UseGuards(JwtAuthGuard, AdminOnlyGuard)
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Post()
  create(@Body() dto: CreateAirportDto) {
    return this.airportService.create(dto);
  }

  @Get()
  findAll() {
    return this.airportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airportService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAirportDto) {
    return this.airportService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airportService.remove(id);
  }
}
