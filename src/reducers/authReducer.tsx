import { types } from '../types/types';

const initialState = {
    logged: false
}

export const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        
        case types.authSignIn:
            return {
                logged: true,
                user: action.payload.user,
                token: action.payload.token,
                
            }

        case types.authCheckToken:
            return {
                logged: true
            }

        case types.authLogout:
            return {
                logged: false
            }

        default:
            return state
    }

}