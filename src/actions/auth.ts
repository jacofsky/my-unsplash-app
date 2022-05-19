import { startLaodingSignin, finishLaodingSignin } from './uiActions';
import { UserLogged, UserLogIn, UserRegister } from '../typescript/interfaces';
import { fetchLogin, fetchRegister } from "../helpers/fetch";
import { types } from "../types/types";
import { closeLoginModal, closeRegisterModal } from '../actions/uiActions';


export const startRegister = (user:UserRegister) => {
    return async(dispatch:any) => {

        dispatch(startLaodingSignin())
        
        try {
            const data = await fetchRegister(user)
            console.log(data)
            const responseUser = { token: data.data.token, name: data.data.user.name, password: data.data.user.password, userId: data.data.user._id}
            dispatch(signIn(responseUser))
            dispatch(closeRegisterModal())

            
        } catch (error:any) {
            console.log(error)
            dispatch(authError(error.response.data.msg, 'register'))
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
            const respUser = { token: data.data.token, name: data.data.user.name, password: data.data.user.password, userId: data.data.user._id}
            dispatch(signIn(respUser))
            dispatch(closeLoginModal())

        } catch (error:any) {
            console.log(error)
            dispatch(authError(error.response.data.msg, 'signIn'))

        }

        dispatch(finishLaodingSignin())


    }
}

const signIn = ({token, name, password, userId}:UserLogged) => ({
    type: types.authSignIn,
    payload: {
        token, 
        name, 
        password,
        userId
    }
})

type location = 'signIn' | 'register'

const authError = (msg:string, locationError:location) => ({
    type: types.authError,
    payload: {
        msg,
        locationError
    }
})

export const authCleanError = () => ({
    type: types.authCleanError
})