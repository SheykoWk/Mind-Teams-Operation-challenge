import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(private usersRepository: UsersRepository) {}

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.usersRepository.listAllUsers();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const user = await this.usersRepository.getUser({ id });
      return user;
    } catch (error) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.usersRepository.getUser({ email });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.usersRepository.createUser(userDto);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
    try {
      const user = await this.usersRepository.updateUser({ id }, userDto);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string): Promise<User> {
    try {
      const user = await this.usersRepository.deleteUser({ id });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
