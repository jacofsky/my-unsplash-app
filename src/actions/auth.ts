import { startLaoding } from "./uiActions"
import { UserLogged, UserLogIn, UserRegister } from '../typescript/interfaces';
import { fetchLogin, fetchRegister } from "../helpers/fetch";
import { types } from "../types/types";


export const startRegister = (user:UserRegister) => {
    return async(dispatch:any) => {

        const data = await fetchRegister(user)
        console.log(data)

        if (data.status === 201) {

            const user = { token: data.data.token, name: data.data.user.name, password: data.data.user.password}
            dispatch(signIn(user))
            
        } else {
            dispatch(authError(data.data.msg))
        }

    }
}

export const startLogin = (user:UserLogIn) => {
    return async(dispatch:any) => {

        const data = await fetchLogin(user)
        console.log(data)

        if (data.status === 200) {

            const user = { token: data.data.token, name: data.data.user.name, password: data.data.user.password}
            dispatch(signIn(user))
            
        } else {
            dispatch(authError(data.data.msg))
        }

    }
}

const signIn = ({token, name, password}:UserLogged) => ({
    type: types.authSignIn,
    payload: {
        token, 
        name, 
        password
    }
})

const authError = (msg:string) => ({
    type: types.authSignIn,
    payload: msg
})