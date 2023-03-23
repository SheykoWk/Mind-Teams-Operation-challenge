import { hash, genSalt, compareSync } from 'bcrypt';

export const hashPassword = async (plainPassword: string) => {
  const salts = await genSalt(10);
  const hashedPassword: string = await hash(plainPassword, salts);
  return hashedPassword;
};

export const comparePassword = (
  plainPassword: string,
  hashedPassword: string,
): boolean => {
  const compare = compareSync(plainPassword, hashedPassword);
  return compare;
};
