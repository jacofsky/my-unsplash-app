import { AnyAction } from "redux";
import { types } from "../types/types";

const initialState = {
    loading: false,
    loadingInModal: false,
    msg: null,
    registerModal: false,
    loginModal: false
}

export const uiReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {
        
        case types.uiLoading:
            return {
                ...state,
                loading: true 
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false   
            }

        case types.uiLoadingSignin:
            return {
                ...state,
                loadingInModal: true 
            }

        case types.uiFinishLoadingSignin:
            return {
                ...state,
                loadingInModal: false   
            }

        case types.uiOpenLoginModal:
            return {
                ...state,
                loginModal: true   
            }

        case types.uiCloseLoginModal:
            return {
                ...state,
                loginModal: false   
            }
        
        case types.uiOpenRegisterModal:
            return {
                ...state,
                registerModal: true   
            }

        case types.uiCloseRegisterModal:
            return {
                ...state,
                registerModal: false   
            }

        case types.uiReloadImages:
            return {
                ...state,
                ...action.payload   
            }
        
        case types.uiSetSearcher:
            return {
                ...state,
                ...action.payload   
            }

        default:
            return state
    }

}