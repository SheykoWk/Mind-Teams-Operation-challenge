import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  ParseUUIDPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { UserService } from '../services/users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UserService) {}
  @Get()
  async getAll() {
    try {
      const users = await this.userService.getAllUsers();
      return users;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: any) {
    try {
      const user = await this.userService.getUserById(id);
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    try {
      const user = await this.userService.createUser(userDto);
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  async updateUser(
    @Param('id', ParseUUIDPipe) userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const user = await this.userService.updateUser(userId, updateUserDto);
      return user;
    } catch (error) {
      throw error;
    }
  }
  @Delete(':id')
  async deleteUser(@Param('id', ParseUUIDPipe) userId: string) {
    try {
      const user = await this.userService.deleteUSer(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
