import { createSlice } from '@reduxjs/toolkit';
import api from '../../helpers/sendsay';

type TConsoleState = {
	request: string | null;
	response: string | null;
	isError: boolean;
	requestsHistory: any;
	loading: boolean;
};

const initialState: TConsoleState = {
	loading: false,
	request: null,
	response: null,
	isError: false,
	requestsHistory: [],
};

const addItemIntoStorage = (state: any) => {
	const store = state();
	localStorage.setItem('history', JSON.stringify(store.console.requestsHistory));
};

export const asyncRequest = (payload: string) => {
	return async (dispatch: any, getState: any) => {
		api.sendsay
			.request(payload)
			.then((res: Response) => {
				dispatch(successRequest({ res, payload }));
				addItemIntoStorage(getState);
			})
			.catch((e: Error) => {
				dispatch(errorRequest({ e, payload }));
				addItemIntoStorage(getState);
			});
	};
};

export const deleteHistoryItem = (id: number) => {
	return (dispatch: any, getState: any) => {
		dispatch(deleteItem(id));
		addItemIntoStorage(getState);
	};
};

export const clearHistory = () => {
	return (dispatch: any) => {
		dispatch(clear());
		localStorage.setItem('history', JSON.stringify([]));
	};
};

export const checkHistory = () => {
	return (dispatch: any) => {
		if (localStorage.getItem('history')) {
			let history: any = localStorage.getItem('history');
			dispatch(check(history));
		}
	};
};

export const copyActionHistoryItem = (id: number) => {
	return async (dispatch: any, getState: any) => {
		const store = getState();
		let historyAction = store.console.requestsHistory.filter((e: any) => e.id === id);
		navigator.clipboard
			.writeText(
				JSON.stringify(JSON.parse(`{"action": "${historyAction[0].action}"}`), undefined, 2)
			)
			.catch((e: any) => console.error('error copy', e));
	};
};

const consoleSlice = createSlice({
	name: 'console',
	initialState,
	reducers: {
		loading(state) {
			state.loading = true;
		},
		successRequest(state, action) {
			state.response = action.payload.res;
			state.requestsHistory.unshift({
				id: Date.now(),
				success: true,
				action: action.payload.payload.action,
			});
			state.loading = false;
		},
		errorRequest(state, action) {
			state.response = action.payload.e;
			state.isError = true;
			state.requestsHistory.unshift({
				id: Date.now(),
				success: false,
				action: action.payload.payload.action,
			});
			state.loading = false;
		},
		clear(state) {
			state.requestsHistory = [];
		},
		check(state, action) {
			state.requestsHistory = JSON.parse(action.payload);
		},
		deleteItem(state, action) {
			state.requestsHistory = state.requestsHistory.filter((e: any) => e.id !== action.payload);
		},
	},
});

export default consoleSlice.reducer;
export const {
	successRequest,
	errorRequest,
	clear,
	check,
	deleteItem,
	loading,
} = consoleSlice.actions;
