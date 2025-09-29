import { Controller, Post, Get, Param, Body, Patch, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminOnlyGuard } from '../auth/guards/admin-only.guard';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  create(@Body() dto: CreateNotificationDto) {
    return this.notificationsService.create(dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  findAll() {
    return this.notificationsService.findAll();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  update(@Param('id') id: string, @Body() dto: UpdateNotificationDto) {
    return this.notificationsService.update(id, dto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOne(id);
  }
  @Delete(':id')
  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(id);
  }
}
