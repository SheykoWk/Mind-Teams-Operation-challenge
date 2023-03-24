import { Injectable } from '@nestjs/common';
import { Prisma, UsersAccountsMoves } from '@prisma/client';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class UserAccountsRepository {
  constructor(private db: PrismaService) {}

  async listAllUserAccounts(): Promise<UsersAccountsMoves[]> {
    return await this.db.usersAccountsMoves.findMany();
  }

  async listUserAccountById(id: string): Promise<UsersAccountsMoves> {
    return await this.db.usersAccountsMoves.findUnique({ where: { id } });
  }

  async createUserAccountMove(
    data: Prisma.UsersAccountsMovesCreateInput,
  ): Promise<UsersAccountsMoves> {
    return await this.db.usersAccountsMoves.create({ data });
  }

  async updateAccountMove(
    id: string,
    data: Prisma.UsersAccountsMovesUpdateInput,
  ): Promise<UsersAccountsMoves> {
    return await this.db.usersAccountsMoves.update({ where: { id }, data });
  }

  async deleteAccountMove(id: string): Promise<UsersAccountsMoves> {
    return await this.db.usersAccountsMoves.update({
      where: { id },
      data: { status: 'deleted' },
    });
  }
}
