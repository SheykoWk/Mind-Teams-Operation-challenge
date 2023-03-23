import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { LoginUserDto } from '../../users/dtos/login.dto';
import { AuthService } from '../services/auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  loginUser(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.genJwt(user);
  }
}
