import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { asyncRequest, clearHistory } from '../store/slices/consoleSlice';
import {
	ConsoleHeader,
	Dropdown,
	DropdownItem,
	Footer,
	HeaderButtons,
	SplitConsole,
	StyledButton,
	Typography,
	Scrollable,
	Logo,
} from '../components';

const ConsolePage: React.FC<RouteComponentProps> = ({ history }) => {
	const { login, sublogin } = useSelector((state: RootStateOrAny) => state.auth);
	const isLoggedIn = useSelector((state: RootStateOrAny) => !!state.auth.sessionKey?.length);
	const response = useSelector((state: RootStateOrAny) => state.console.response);
	const isError = useSelector((state: RootStateOrAny) => state.console.isError);
	const requestsHistory = useSelector((state: RootStateOrAny) => state.console.requestsHistory);
	const [isInvalid, setIsInvali] = useState<boolean>(true);
	const [forRequest, setForRequest] = useState<any>(null);

	useEffect(() => {
		if (!isLoggedIn) {
			history.push('/');
		}
	}, [isLoggedIn]);

	const dispatch = useDispatch();

	const handlelogoutLogOut = () => {
		dispatch(logout());
	};

	const historyItems: Array<string | number> = [];

	const handleRequest = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setForRequest(e.currentTarget.value);
		try {
			JSON.stringify(JSON.parse(e.currentTarget.value), undefined, 2);
			setIsInvali(false);
		} catch (e) {
			console.error('err');
			setIsInvali(true);
		}
	};

	const FormatToJson = (e: React.FormEvent<HTMLButtonElement>) => {
		setForRequest(JSON.stringify(JSON.parse(forRequest), undefined, 2));
	};

	const handleSendRequest = () => {
		dispatch(asyncRequest(JSON.parse(forRequest)));
	};

	return (
		<>
			<ConsoleHeader item="wrapper">
				<ConsoleHeader item="wrapper-item">
					<Logo />
					<Typography size="20">API-консолька</Typography>
				</ConsoleHeader>
				<ConsoleHeader item="wrapper-item">
					<ConsoleHeader item="user-data">
						<Typography size="16">
							{login} : {sublogin}
						</Typography>
					</ConsoleHeader>
					<HeaderButtons onClick={handlelogoutLogOut} type="logout" title="Выйти" />
					<HeaderButtons title="full" type="fullscreen" />
				</ConsoleHeader>
			</ConsoleHeader>

			<Dropdown>
				<Scrollable>
					{requestsHistory.length
						? requestsHistory.map((i: any, index: any) => (
								<DropdownItem key={index} isSuccess={i.success}>
									{i.action}
								</DropdownItem>
						  ))
						: null}
				</Scrollable>
				<HeaderButtons onClick={() => dispatch(clearHistory())} type="clear-history">
					X
				</HeaderButtons>
			</Dropdown>

			<div style={{ background: 'white', height: '100%', position: 'relative' }}>
				<SplitConsole
					onChange={handleRequest}
					value={forRequest}
					isInvalid={isInvalid}
					response={response}
					isError={isError}
				/>
			</div>

			<Footer>
				<StyledButton value="Отправить" onClick={handleSendRequest} type="button" />
				<a href="https://github.com/viskos">@viskos</a>
				<button onClick={FormatToJson} disabled={isInvalid}>
					Форматировать
				</button>
			</Footer>
		</>
	);
};

export default withRouter(ConsolePage);
