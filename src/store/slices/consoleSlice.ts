import { createSlice } from '@reduxjs/toolkit';
import api from '../../helpers/sendsay';

type TConsoleState = {
	request: string | null;
	response: string | null;
	isError: boolean;
	requestsHistory: any;
};

const initialState: TConsoleState = {
	request: null,
	response: null,
	isError: false,
	requestsHistory: [],
};

export const asyncRequest = (payload: string) => {
	return async (dispatch: any) => {
		api.sendsay
			.request(payload)
			.then((res: Response) => {
				dispatch(successRequest({ res, payload }));
			})
			.catch((e: Error) => {
				dispatch(errorRequest({ e, payload }));
			});
	};
};

const consoleSlice = createSlice({
	name: 'console',
	initialState,
	reducers: {
		successRequest(state, action) {
			state.response = action.payload.res;
			state.requestsHistory.unshift({
				id: Date.now(),
				success: true,
				action: action.payload.payload.action,
			});
			localStorage.setItem('history', JSON.stringify(state.requestsHistory));
		},
		errorRequest(state, action) {
			state.response = action.payload.e;
			state.isError = true;
			state.requestsHistory.unshift({
				id: Date.now(),
				success: false,
				action: action.payload.payload.action,
			});
			localStorage.setItem('history', JSON.stringify(state.requestsHistory));
		},
		clearHistory(state) {
			state.requestsHistory = [];
			localStorage.setItem('history', JSON.stringify([]));
		},
		checkHistory(state) {
			if (localStorage.getItem('history')) {
				let history: any = localStorage.getItem('history');
				state.requestsHistory = JSON.parse(history);
			}
		},
		deleteHistoryItem(state, action) {
			state.requestsHistory = state.requestsHistory.filter((e: any) => e.id !== action.payload);
			localStorage.setItem('history', JSON.stringify(state.requestsHistory));
		},
		copyActionHistoryItem(state, action) {
			let historyAction = state.requestsHistory.filter((e: any) => e.id === action.payload);
			navigator.clipboard
				.writeText(
					JSON.stringify(JSON.parse(`{"action": "${historyAction[0].action}"}`), undefined, 2)
				)
				.then(() => console.log('copy'))
				.catch((e: any) => console.error('error copy', e));
		},
	},
});

export default consoleSlice.reducer;
export const {
	successRequest,
	errorRequest,
	clearHistory,
	checkHistory,
	deleteHistoryItem,
	copyActionHistoryItem,
} = consoleSlice.actions;
