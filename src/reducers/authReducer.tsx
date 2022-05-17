import { types } from '../types/types';

const initialState = {
    logged: false
}

interface actionTS {
    payload: any,
    type: any
}

export const authReducer = (state = initialState, action:actionTS) => {

    switch (action.type) {
        
        case types.authSignIn:
            return {
                ...state,
                ...action.payload,
                logged: true,
                
            }

        case types.authCheckToken:
            return {
                ...state,
                ...action.payload,
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