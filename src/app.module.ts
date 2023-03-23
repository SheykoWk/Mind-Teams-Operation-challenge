import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './db/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from 'enviroments';
import config from './config';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
