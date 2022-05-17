import { types } from "../types/types";


export const startLaoding = () => ({
    type: types.uiLoading
})

export const finishLaoding = () => ({
    type: types.uiFinishLoading
})