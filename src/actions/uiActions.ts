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

export const openLoginModal = () => ({
    type: types.uiOpenLoginModal
})

export const openRegisterModal = () => ({
    type: types.uiOpenRegisterModal
})

export const closeLoginModal = () => ({
    type: types.uiCloseLoginModal
})

export const closeRegisterModal = () => ({
    type: types.uiCloseRegisterModal
})

export const reloadImages = (reload:number) => ({
    type: types.uiReloadImages,
    payload: {reload}
})

export const setSearcher = (label:string|null) => ({
    type: types.uiSetSearcher,
    payload: {label}
})

export const cleanSearcher = () => ({
    type: types.uiCleanSearcher
})