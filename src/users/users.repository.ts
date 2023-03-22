import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private db: PrismaService) {}

  async listAllUsers(): Promise<User[]> {
    return await this.db.user.findMany();
  }

  async getUser(params: { email?: string; id?: string }): Promise<User> {
    return await this.db.user.findUnique({ where: params });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.db.user.create({ data });
  }

  async updateUser(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return await this.db.user.update({ where, data });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.db.user.update({
      where,
      data: {
        status: 'Deleted',
      },
    });
  }
}
