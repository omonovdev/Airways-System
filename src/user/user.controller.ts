import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminOnlyGuard } from '../auth/guards/admin-only.guard';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminOnlyGuard)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Request() req) {
    // Agar admin bo'lsa, hamma userlarni ko'rsatadi
    if (req.user && req.user.isAdmin) {
      return this.userService.findAll();
    }
    if (!req.user?.sub) {
      throw new UnauthorizedException('User ID is required from token');
    }
    // Oddiy user faqat o'zini ko'radi
    return this.userService.findSelf(req.user.sub);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string, @Request() req) {
    if (!req.user?.isAdmin && req.user?.sub !== id) {
      throw new UnauthorizedException('Access denied');
    }
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Request() req) {
    if (!req.user?.isAdmin && req.user?.sub !== id) {
      throw new UnauthorizedException('Access denied');
    }
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Request() req) {
    if (!req.user?.isAdmin && req.user?.sub !== id) {
      throw new UnauthorizedException('Access denied');
    }
    return this.userService.remove(id);
  }
}
