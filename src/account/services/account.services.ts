import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../account.repository';
import { CreateAccountDto, UpdateAccountDto } from '../dtos/account.dto';
import { Account } from '../entities/account.entity';

@Injectable()
export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  async getAllAccounts(): Promise<Account[]> {
    const accounts = await this.accountRepository.listAllAccounts();
    return accounts;
  }

  async getAccountById(id: string): Promise<Account> {
    const account = await this.accountRepository.getAccount(id);
    return account;
  }

  async createAccount(accountDto: CreateAccountDto): Promise<Account> {
    const account = await this.accountRepository.createAccount(accountDto);
    return account;
  }

  async updateAccount(
    id: string,
    accountDto: UpdateAccountDto,
  ): Promise<Account> {
    const account = await this.accountRepository.updateAccount(
      { id },
      accountDto,
    );
    return account;
  }

  async deleteAccount(id: string): Promise<Account> {
    const account = await this.accountRepository.deleteAccount({ id });
    return account;
  }
}
