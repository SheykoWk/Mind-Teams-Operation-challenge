import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(private usersRepository: UsersRepository) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.usersRepository.listAllUsers();
    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.usersRepository.getUser({ id });
    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.getUser({ email });
    return user;
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.createUser(userDto);
    return user;
  }

  async updateUser(id: string, userDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.updateUser({ id }, userDto);
    return user;
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.usersRepository.deleteUser({ id });
    return user;
  }
}
