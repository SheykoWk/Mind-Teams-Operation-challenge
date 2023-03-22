import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { AuthController } from './controllers/auth.controller';
import { UsersController } from './controllers/user.controller';
import { AuthService } from './services/auth.service';
import { UserService } from './services/users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController, UsersController],
  providers: [UserService, AuthService, UsersRepository],
})
export class UsersModule {}
