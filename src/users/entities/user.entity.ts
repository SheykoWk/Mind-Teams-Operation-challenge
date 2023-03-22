import { EnglishLevels, User as UserModel } from '@prisma/client';

export class User implements UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  english_level: EnglishLevels;
  role: string;
  status: string;
}
