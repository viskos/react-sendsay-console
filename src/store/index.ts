import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import consoleSlice from './slices/consoleSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    console: consoleSlice
})

export const store = configureStore({
    reducer: rootReducer
})