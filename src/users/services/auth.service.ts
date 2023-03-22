import { Injectable } from '@nestjs/common';
import { LoginUserDto } from '../dtos/login.dto';
import { UserService } from './users.service';
import { comparePassword } from '../../shared/lib/bcrypt';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async checkUsersCredentials(loginDto: LoginUserDto) {
    const user = await this.userService.getUserByEmail(loginDto.email);

    const checkAuthentication = comparePassword(
      loginDto.password,
      user.password,
    );
    if (!checkAuthentication) {
      return false;
    }
    return user;
  }
}
