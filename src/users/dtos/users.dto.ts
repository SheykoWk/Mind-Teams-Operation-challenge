import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { EnglishLevels } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly english_level: EnglishLevels;

  @IsString()
  @IsNotEmpty()
  readonly role?: string;

  @IsString()
  @IsNotEmpty()
  readonly status?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
