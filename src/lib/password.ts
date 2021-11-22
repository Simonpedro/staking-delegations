import bcrypt from "bcrypt"

const SALT_ROUNDS = 10

export const encrypt = (password: string) => {
  return bcrypt.hash(password, SALT_ROUNDS)
}


export const compare = (plain: string, encrypted: string) => {
  return bcrypt.compare(plain, encrypted)
}
