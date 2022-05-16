import { types } from "../types/types";

const initialState = {
    loading: true
}

export const authReducer = (state = initialState, action: any) => {

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