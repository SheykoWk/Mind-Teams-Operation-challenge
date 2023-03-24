import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { User, Account } from '@prisma/client';

export class CreateUserAccountDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly accountId: string;

  @IsDate()
  @IsNotEmpty()
  readonly start_date: Date;

  @IsDate()
  @IsOptional()
  readonly exit_date: Date;

  @IsOptional()
  readonly account: Account;

  @IsOptional()
  readonly user: User;
}

export class UpdateUserAccountDto extends PartialType(CreateUserAccountDto) {}
