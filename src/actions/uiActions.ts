import { types } from "../types/types";


export const startLaoding = () => ({
    type: types.uiLoading
})

export const finishLaoding = () => ({
    type: types.uiFinishLoading
})

export const startLaodingSignin = () => ({
    type: types.uiLoadingSignin
})

export const finishLaodingSignin = () => ({
    type: types.uiFinishLoadingSignin
})