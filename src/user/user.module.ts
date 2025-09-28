import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { LoyaltyModule } from '../loyalty/loyalty.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), LoyaltyModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
