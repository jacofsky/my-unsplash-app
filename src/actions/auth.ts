import { startLaodingSignin, finishLaodingSignin } from './uiActions';
import { UserLogged, UserLogIn, UserRegister } from '../typescript/interfaces';
import { fetchLogin, fetchRegister, fetchRenewToken } from "../helpers/fetch";
import { types } from "../types/types";
import { closeLoginModal, closeRegisterModal } from '../actions/uiActions';
import * as jwt from 'jose'

export const startRegister = (user:UserRegister) => {
    return async(dispatch:any) => {

        dispatch(startLaodingSignin())
        
        try {
            const data = await fetchRegister(user)
            console.log(data)
            const responseUser = { token: data.data.token, name: data.data.user.name, password: data.data.user.password, userId: data.data.user._id}
            localStorage.setItem('token', data.data.token)
            dispatch(signIn(responseUser))
            dispatch(closeRegisterModal())

            
        } catch (error:any) {
            console.log(error)
            dispatch(authError(error.response.data.msg, 'register'))
        }

        dispatch(finishLaodingSignin())
        
        
        

    }
}

export const startCheking = () => {
    return async(dispatch:any) => {
        const token = localStorage.getItem('token')
        console.log(token);
        
        if(token) {
            const {uid} = jwt.decodeJwt(token)
            const {data, status} = await fetchRenewToken(uid)

            
            if(status === 200){
                const respUser = { token: data.token, name: data.user.name, password: data.user.password, userId: data.user._id}
                console.log(respUser)
                dispatch(signIn(respUser))
            }
                        
        }
        
    }
}

export const startLogOut = () => {
    return (dispatch:any) => {
        localStorage.clear()
        dispatch(logOut())
    }
}

export const logOut = () => ({
    type: types.authLogout
})

export const startLogin = (user:UserLogIn) => {
    return async(dispatch:any) => {

        dispatch(startLaodingSignin())

        try {
            const data = await fetchLogin(user)
            console.log(data)
            const respUser = { token: data.data.token, name: data.data.user.name, password: data.data.user.password, userId: data.data.user._id}
            localStorage.setItem('token', data.data.token)
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