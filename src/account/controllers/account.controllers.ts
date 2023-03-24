import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateAccountDto, UpdateAccountDto } from '../dtos/account.dto';
import { AccountService } from '../services/account.services';

@Controller('api/v1/accounts')
export class AccountsController {
  constructor(private accountService: AccountService) {}
  @Get()
  async getAll() {
    try {
      const account = await this.accountService.getAllAccounts();
      return account;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const account = await this.accountService.getAccountById(id);
      if (!account) throw new NotFoundException('Account not found');
      return account;
    } catch (error) {
      throw new NotFoundException('Account not found');
    }
  }

  @Post()
  async createAccount(@Body() accountDto: CreateAccountDto) {
    try {
      const account = await this.accountService.createAccount(accountDto);
      return account;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  async updateAccount(
    @Param('id', ParseUUIDPipe) accountId: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    try {
      const account = await this.accountService.updateAccount(
        accountId,
        updateAccountDto,
      );
      return account;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Delete(':id')
  async deleteAccount(@Param('id', ParseUUIDPipe) accountId: string) {
    try {
      const account = await this.accountService.deleteAccount(accountId);
      return account;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
