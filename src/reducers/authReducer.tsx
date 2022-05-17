import { AnyAction } from 'redux';
import { types } from '../types/types';

const initialState = {
    logged: false,
    error: false
}


export const authReducer = (state = initialState, action:AnyAction) => {

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
                ...action.payload,
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