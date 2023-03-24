import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/db/prisma.module';
import { AccountsController } from './controllers/account.controllers';
import { AccountService } from './services/account.services';
import { AccountRepository } from './account.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AccountsController],
  providers: [AccountService, AccountRepository],
})
export class AccountModule {}
