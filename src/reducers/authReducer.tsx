import { types } from '../types/types';

const initialState = {
    logged: false,
    error: false
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
                error: false
            }

        case types.authCheckToken:
            return {
                ...state,
                ...action.payload,
                logged: true,
                error: false
            }
        
            case types.authError:
            return {
                msg: action.payload,
                logged: false,
                error: true
            }

        case types.authLogout:
            return {
                logged: false,
                error: false
            }

        default:
            return state
    }

}