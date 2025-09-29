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
import { PlaneService } from './plane.service';
import { CreatePlaneDto } from './dto/create-plane.dto';
import { UpdatePlaneDto } from './dto/update-plane.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminOnlyGuard } from '../auth/guards/admin-only.guard';

@Controller('planes')
@UseGuards(JwtAuthGuard, AdminOnlyGuard)
export class PlaneController {
  constructor(private readonly planeService: PlaneService) {}

  @Post()
  create(@Body() dto: CreatePlaneDto) {
    return this.planeService.create(dto);
  }

  @Get()
  findAll() {
    return this.planeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePlaneDto) {
    return this.planeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planeService.remove(id);
  }
}
