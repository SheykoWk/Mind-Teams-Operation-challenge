import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';

import { LoginUserDto } from '../../users/dtos/login.dto';
import { comparePassword } from '../../shared/lib/bcrypt';
import { User } from '../../users/entities/user.entity';
import { PayloadToken } from '../models/token.model';

import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async checkUsersCredentials(loginDto: LoginUserDto) {
    const user = await this.userService.getUserByEmail(loginDto.email);

    const checkPasswordsMatch = comparePassword(
      loginDto.password,
      user.password,
    );
    if (!checkPasswordsMatch || !user) {
      return null;
    }
    const { password, ...rta } = user;

    return rta;
  }
  async genJwt(user: User) {
    const payload: PayloadToken = {
      role: user.role,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
