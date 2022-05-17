import { AnyAction } from "redux";
import { types } from "../types/types";

const initialState = {
    loading: false,
    loadingInModal: false,
    msg: null
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

        default:
            return state
    }

}