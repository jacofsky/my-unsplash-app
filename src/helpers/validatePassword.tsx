import { compareSync } from 'bcryptjs'

export const validPassword = (password:string, userPassword:string) => {
    const valid = compareSync(password, userPassword)
    return valid
}