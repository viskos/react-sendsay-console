import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../helpers/sendsay';

type TAuthUserState = {
	loading: boolean;
	sessionKey: string | null;
	login: string | null;
	sublogin: string | null;
	password: string | null;
	asyncAuthResErr: any;
	testAuth: any;
};

type TAuthenticate = {
	login: string;
	sublogin: string;
	password: string;
};

const initialState: TAuthUserState = {
	loading: false,
	sessionKey: null,
	login: null,
	sublogin: null,
	password: null,
	asyncAuthResErr: null,
	testAuth: null,
};

export const asyncCheckAuth = () => {
	return async (dispatch: any) => {
		api.sendsay
			.request({
				action: 'pong',
			})
			.then((res: any) => {
				dispatch(
					checkAuth({
						login: res.account,
						sublogin: res.sublogin,
						key: localStorage.getItem('sendsay_session'),
					})
				);
				document.cookie = `sendsay_session=${api.sendsay.session}`;
			})
			.catch((err: any) => {
				if (err.id === 'error/auth/failed') {
					dispatch(logout());
				}
			});
	};
};

export const asyncAuthUser = (payload: TAuthenticate) => {
	return async (dispatch: any) => {
		api.sendsay
			.login({
				login: payload.login,
				sublogin: payload.sublogin,
				password: payload.password,
			})
			.then(() => {
				dispatch(
					authenticateSuccess({
						login: payload.login,
						sublogin: payload.sublogin,
						key: api.sendsay.session,
					})
				);
				document.cookie = `sendsay_session=${api.sendsay.session}`;
				localStorage.setItem('sendsay_session', api.sendsay.session);
			})
			.catch((err: any) => {
				document.cookie = '';
				dispatch(authenticateError(err));
			});
	};
};

export const logout = () => {
	return (dispatch: any) => {
		dispatch(logoutAuth());
		document.cookie = '';
		localStorage.clear();
	};
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		checkAuth(state, action) {
			state.login = action.payload.login;
			state.sublogin = action.payload.sublogin;
			state.sessionKey = action.payload.key;
		},
		authenticateSuccess(state, action) {
			state.login = action.payload.login;
			state.sublogin = action.payload.sublogin;
			state.sessionKey = action.payload.key;
		},
		authenticateError(state, action) {
			state.asyncAuthResErr = action.payload;
		},
		logoutAuth(state) {
			state.sessionKey = null;
			state.login = null;
			state.sublogin = null;
		},
	},
});

export default authSlice.reducer;
export const { checkAuth, authenticateSuccess, authenticateError, logoutAuth } = authSlice.actions;
