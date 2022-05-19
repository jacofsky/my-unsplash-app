import { AnyAction } from 'redux';
import { types } from '../types/types';

const initialState = {
    logged: false,
    error: false,
    locationError: null
}


export const authReducer = (state = initialState, action:AnyAction) => {

    switch (action.type) {
        
        case types.authSignIn:
            return {
                ...state,
                ...action.payload,
                logged: true,
                error: false,
                locationError: null

            }

        case types.authCheckToken:
            return {
                ...state,
                ...action.payload,
                logged: true,
                error: false,
                locationError: null

            }
        
        case types.authError:
            return {
                ...action.payload,
                logged: false,
                error: true,
            }

        case types.authCleanError:
            return {
                ...state,
                error: false,
                locationError: null

            }

        case types.authLogout:
            return {
                logged: false,
                error: false,
                locationError: null

            }

        

        default:
            return state
    }

}