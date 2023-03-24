import { Account as AccountModel } from '@prisma/client';

export class Account implements AccountModel {
  id: string;
  name: string;
  operation_manager: string;
  status: string;
}
