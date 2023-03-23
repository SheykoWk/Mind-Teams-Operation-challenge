import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { UsersController } from './controllers/user.controller';
import { UserService } from './services/users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService, UsersRepository],
  exports: [UserService],
})
export class UsersModule {}
