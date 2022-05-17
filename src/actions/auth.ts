import { startLaodingSignin, finishLaodingSignin } from './uiActions';
import { UserLogged, UserLogIn, UserRegister } from '../typescript/interfaces';
import { fetchLogin, fetchRegister } from "../helpers/fetch";
import { types } from "../types/types";


export const startRegister = (user:UserRegister) => {
    return async(dispatch:any) => {

        dispatch(startLaodingSignin())
        
        try {
            const data = await fetchRegister(user)
            console.log(data)
            const responseUser = { token: data.data.token, name: data.data.user.name, password: data.data.user.password}
            dispatch(signIn(responseUser))
            
        } catch (error:any) {
            console.log(error)
            dispatch(authError(error.response.data.msg))
        }

        dispatch(finishLaodingSignin())
        
        
        

    }
}

export const startLogin = (user:UserLogIn) => {
    return async(dispatch:any) => {

        dispatch(startLaodingSignin())

        try {
            const data = await fetchLogin(user)
            console.log(data)
            const respUser = { token: data.data.token, name: data.data.user.name, password: data.data.user.password}
            dispatch(signIn(respUser))

        } catch (error:any) {
            dispatch(authError(error.response.data.msg))

        }

        dispatch(finishLaodingSignin())


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
    type: types.authError,
    payload: {msg}
})