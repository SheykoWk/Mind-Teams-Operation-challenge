import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

export default registerAs('config', () => {
  return {
    database: {
      url: process.env.DATABASE_URL,
    },
    nodeEnv: process.env.NODE_EMV,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    host: process.env.HOST,
    apiKey: process.env.API_KEY,
  };
});
