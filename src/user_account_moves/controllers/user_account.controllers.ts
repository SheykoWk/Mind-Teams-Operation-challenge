import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  NotFoundException,
  BadRequestException,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserAccountsService } from '../services/user_account.services';

@Controller('/api/v1/user_accounts')
export class UserAccountsController {
  constructor(private userAccountService: UserAccountsService) {}

  @Get()
  async getAll() {
    try {
      const data = await this.userAccountService.getAllUserAccounts();
      return data;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('/:id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const data = await this.userAccountService.getUserAccountById(id);
      if (!data)
        throw new NotFoundException(
          `The register with the id: ${id} not found`,
        );
      return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Post()
  async createUserAccount(
    @Body() userAccountDto: Prisma.UsersAccountsMovesCreateInput,
  ) {
    try {
      const account = await this.userAccountService.createUserAccount(
        userAccountDto,
      );
      return account;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  async updateUserAccount(
    @Param('id', ParseUUIDPipe) accountId: string,
    @Body() userAccountDto: Prisma.UsersAccountsMovesUpdateInput,
  ) {
    try {
      const account = await this.userAccountService.updateUserAccount(
        accountId,
        userAccountDto,
      );
      return account;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Delete(':id')
  async deleteUserAccount(@Param('id', ParseUUIDPipe) accountId: string) {
    try {
      const account = await this.userAccountService.deleteUserAccount(
        accountId,
      );
      return account;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
