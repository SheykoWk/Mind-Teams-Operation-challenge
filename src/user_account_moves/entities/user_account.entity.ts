import { UsersAccountsMoves as UserAccountModel } from '@prisma/client';

export class UserAccounts implements UserAccountModel {
  id: string;
  userId: string;
  accountId: string;
  start_date: Date;
  exit_date: Date;
  status: string;
}
