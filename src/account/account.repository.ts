import { Injectable } from '@nestjs/common';
import { Prisma, Account } from '@prisma/client';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class AccountRepository {
  constructor(private db: PrismaService) {}

  async listAllAccounts(): Promise<Account[]> {
    return await this.db.account.findMany();
  }

  async getAccount(id: string): Promise<Account> {
    return await this.db.account.findUnique({ where: { id } });
  }

  async createAccount(data: Prisma.AccountCreateInput): Promise<Account> {
    return await this.db.account.create({ data: data });
  }

  async updateAccount(
    where: Prisma.AccountWhereUniqueInput,
    data: Prisma.AccountUpdateInput,
  ): Promise<Account> {
    return await this.db.account.update({ where, data });
  }

  async deleteAccount(where: Prisma.AccountWhereUniqueInput): Promise<Account> {
    return await this.db.account.update({
      where,
      data: {
        status: 'Deleted',
      },
    });
  }
}
