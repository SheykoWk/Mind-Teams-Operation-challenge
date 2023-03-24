import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { UserAccountsController } from './controllers/user_account.controllers';
import { UserAccountsService } from './services/user_account.services';
import { UserAccountsRepository } from './user_account.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserAccountsController],
  providers: [UserAccountsService, UserAccountsRepository],
})
export class UserAccountModule {}
