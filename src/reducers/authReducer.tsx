import { types } from "../types/types";

const initialState = {
    checking: true
}

export const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        
        case types.authSignIn:
            return {
                
            }

        case types.authCheckToken:
            return {
                
            }

        case types.authLogout:
            return {
                
            }

        default:
            return state
    }

}