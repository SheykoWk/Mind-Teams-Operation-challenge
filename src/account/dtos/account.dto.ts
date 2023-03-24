import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly operation_manager: string;
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
