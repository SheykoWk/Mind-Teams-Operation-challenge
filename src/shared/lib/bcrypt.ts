import { hashSync, genSaltSync, compareSync } from 'bcrypt';

export const hashPassword = (plainPassword: string): string => {
  const salts = genSaltSync(10);
  const hashedPassword: string = hashSync(plainPassword, salts);
  return hashedPassword;
};

export const comparePassword = (
  plainPassword: string,
  hashedPassword: string,
): boolean => {
  const compare = compareSync(plainPassword, hashedPassword);
  return compare;
};
