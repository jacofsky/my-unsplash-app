import { AnyAction } from "redux";
import { types } from "../types/types";

const initialState = {
    loading: false
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

        default:
            return state
    }

}