import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer'


export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch