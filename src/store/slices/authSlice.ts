import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../helpers/sendsay';

type TAuthUserState = {
	loading: boolean,
	sessionKey: string | null,
	login: string | null,
	sublogin: string | null,
	password: string | null,
	asyncAuthResErr: any
}

type TAuthenticate = {
	login: string,
	sublogin: string,
	password: string
}

const initialState: TAuthUserState = {
	loading: false,
	sessionKey: null,
	login: null,
	sublogin: null,
	password: null,
	asyncAuthResErr: null,
};

export const asyncAuthUser = (payload: TAuthenticate) => {
	return async (dispatch: any)=> {
		api.sendsay
			.login({
				login: payload.login,
				sublogin: payload.sublogin,
				password: payload.password
			})
			.then(() => {
				dispatch(authenticateSuccess(api.sendsay.session))
				document.cookie = `sendsay_session=${api.sendsay.session}`;
			})
			.catch((err: any) => {
				document.cookie = '';
				console.log('err', err);
				dispatch(authenticateError(err))
			});
	}
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authenticateSuccess(state, action) {
			state.sessionKey = action.payload
		},
		authenticateError(state, action) {
			state.asyncAuthResErr = action.payload
		}
	}
});

export default authSlice.reducer;
export const { authenticateSuccess, authenticateError } = authSlice.actions;
