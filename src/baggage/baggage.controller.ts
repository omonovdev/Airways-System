import { Controller, Post, Get, Put, Param, Body, UseGuards, Patch, Delete } from '@nestjs/common';
import { AdminOnlyGuard } from '../auth/guards/admin-only.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateBaggageDto } from './dto/update-baggage.dto';
import { BaggageService } from './baggage.service';
import { CreateBaggageDto } from './dto/create-baggage.dto';

@Controller('baggage')
export class BaggageController {
  constructor(private readonly baggageService: BaggageService) {}

  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  @Post()
  create(@Body() dto: CreateBaggageDto) {
    return this.baggageService.create(dto);
  }

  @Get()
  findAll() {
    return this.baggageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baggageService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBaggageDto) {
    return this.baggageService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baggageService.remove(id);
  }
}
