import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDto } from '../dtos/login.dto';
import { AuthService } from '../services/auth.service';

@Controller('api/v1/auth/login')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async loginUser(@Body() loginDto: LoginUserDto) {
    return this.authService.checkUsersCredentials(loginDto);
  }
}
