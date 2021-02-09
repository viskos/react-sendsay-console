import { createSlice } from "@reduxjs/toolkit";
import api from '../../helpers/sendsay';


type TConsoleState = {
    request: string | null,
    response: string | null,
    isError: boolean
    requestsHistory: Array<any>
}

const initialState: TConsoleState = {
    request: null,
    response: null,
    isError: false,
    requestsHistory: []
}

export const asyncRequest = (payload: any) => {
    return async (dispatch: any) => {
        api.sendsay.request(payload)
            .then((res: any) => {
                dispatch(successRequest({res, payload}))
            })
            .catch((e: any) => {
                dispatch(errorRequest({e, payload}))
            }) 
    }
}

const consoleSlice = createSlice({
    name: 'console',
    initialState,
    reducers: {
        successRequest(state, action) {
            state.response = action.payload.res
            state.requestsHistory.unshift({
                success: true,
                action: action.payload.payload.action
            })
        },
        errorRequest(state, action) {
            state.response = action.payload.e
            state.isError = true
            state.requestsHistory.unshift({
                success: false,
                action: action.payload.payload.action
            })
        },
        clearHistory(state) {
            state.requestsHistory = []
        }
    }
})

export default consoleSlice.reducer
export const { successRequest, errorRequest, clearHistory } = consoleSlice.actions