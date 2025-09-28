import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Admin } from '../admin/entities/admin.entity';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { resSuccess } from '../utils/succes-response';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}
  async adminLogin(loginDto: LoginDto) {
    const admin = await this.adminRepository.findOne({
      where: { email: loginDto.email },
    });
    if (!admin) throw new UnauthorizedException('Admin not found');
    const isMatch = await bcrypt.compare(loginDto.password, admin.password);
    if (!isMatch) throw new UnauthorizedException('Invalid password');
  const payload = { sub: admin.id, email: admin.email };
    const token = this.jwtService.sign(payload);
    return resSuccess({ message: 'Admin login successful', token });
  }

}
