import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserAccounts } from '../entities/user_account.entity';
import { UserAccountsRepository } from '../user_account.repository';

@Injectable()
export class UserAccountsService {
  constructor(private userAccountRepository: UserAccountsRepository) {}

  async getAllUserAccounts(): Promise<UserAccounts[]> {
    const userAccounts = await this.userAccountRepository.listAllUserAccounts();
    return userAccounts;
  }

  async getUserAccountById(id: string): Promise<UserAccounts> {
    const userAccount = await this.userAccountRepository.listUserAccountById(
      id,
    );
    return userAccount;
  }

  async createUserAccount(
    data: Prisma.UsersAccountsMovesCreateInput,
  ): Promise<UserAccounts> {
    const newUserAccount =
      await this.userAccountRepository.createUserAccountMove(data);
    return newUserAccount;
  }

  async updateUserAccount(
    id: string,
    data: Prisma.UsersAccountsMovesUpdateInput,
  ): Promise<UserAccounts> {
    const userAccount = await this.userAccountRepository.updateAccountMove(
      id,
      data,
    );
    return userAccount;
  }

  async deleteUserAccount(id: string): Promise<UserAccounts> {
    const userAccount = this.userAccountRepository.deleteAccountMove(id);
    return userAccount;
  }
}
