import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import {
	asyncRequest,
	clearHistory,
	checkHistory,
	deleteHistoryItem,
	copyActionHistoryItem,
	loading,
} from '../store/slices/consoleSlice';
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
	Loader,
	SplitWrapper,
} from '../components';

const ConsolePage: React.FC<RouteComponentProps> = ({ history }) => {
	const dispatch = useDispatch();
	const { login, sublogin } = useSelector((state: RootStateOrAny) => state.auth);
	const isLoading = useSelector((state: RootStateOrAny) => state.console.loading);
	const isLoggedIn = useSelector((state: RootStateOrAny) => !!state.auth.sessionKey?.length);
	const response = useSelector((state: RootStateOrAny) => state.console.response);
	const isError = useSelector((state: RootStateOrAny) => state.console.isError);
	const requestsHistory = useSelector((state: RootStateOrAny) => state.console.requestsHistory);
	const [isInvalid, setIsInvali] = useState<boolean>(true);
	const [forRequest, setForRequest] = useState<any>(null);
	const [fullscreen, setFullscreen] = useState<boolean>(false);

	useEffect(() => {
		if (!isLoggedIn) {
			history.push('/');
		}
	}, [isLoggedIn]);

	useEffect(() => {
		dispatch(checkHistory());
	}, []);

	const handlelogoutLogOut = () => {
		dispatch(logout());
	};

	const handleFullScreen = () => {
		if (fullscreen) {
			document.exitFullscreen().catch((e) => console.error('fullscreen error', e));
			setFullscreen(false);
		} else {
			document.documentElement
				.requestFullscreen()
				.catch((e) => console.error('fullscreen error', e));
			setFullscreen(true);
		}
	};

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

	const handleReRequest = (action: string) => {
		dispatch(loading());
		setIsInvali(false);
		setForRequest(JSON.stringify(JSON.parse(`{"action": "${action}"}`), undefined, 2));
		dispatch(asyncRequest(JSON.parse(`{"action": "${action}"}`)));
	};

	const FormatToJson = () => {
		setForRequest(JSON.stringify(JSON.parse(forRequest), undefined, 2));
	};

	const handleSendRequest = () => {
		dispatch(loading());
		dispatch(asyncRequest(JSON.parse(forRequest)));
	};

	return (
		<>
			<ConsoleHeader item="wrapper">
				<ConsoleHeader item="wrapper-item">
					<Logo />
					<Typography size="20">API-консолька</Typography>
				</ConsoleHeader>
				<ConsoleHeader item="wrapper-item-flex">
					<ConsoleHeader item="user-data">
						<Typography size="16">
							{login}
							{sublogin ? <>: {sublogin}</> : null}
						</Typography>
					</ConsoleHeader>
					<HeaderButtons onClick={handlelogoutLogOut} type="logout" title="Выйти" />
					<HeaderButtons
						onClick={handleFullScreen}
						fullscreen={fullscreen}
						title="full"
						type="fullscreen"
					/>
				</ConsoleHeader>
			</ConsoleHeader>

			<Dropdown>
				<Scrollable>
					{requestsHistory.length
						? requestsHistory.map((i: any) => (
								<DropdownItem
									key={i.id}
									isSuccess={i.success}
									handleDelete={() => dispatch(deleteHistoryItem(i.id))}
									handleCopy={() => dispatch(copyActionHistoryItem(i.id))}
									handleReRequest={() => handleReRequest(i.action)}
								>
									{i.action}
								</DropdownItem>
						  ))
						: null}
				</Scrollable>
				<HeaderButtons onClick={() => dispatch(clearHistory())} type="clear-history">
					X
				</HeaderButtons>
			</Dropdown>

			<SplitWrapper>
				<SplitConsole
					onChange={handleRequest}
					value={forRequest}
					isInvalid={isInvalid}
					response={response}
					isError={isError}
				/>
			</SplitWrapper>

			<Footer>
				<StyledButton onClick={handleSendRequest} type="button" disabled={isInvalid}>
					{isLoading ? <Loader /> : 'Отправить'}
				</StyledButton>
				<Typography link="https://github.com/viskos">@viskos</Typography>
				<HeaderButtons
					onClick={() => FormatToJson()}
					type="format"
					disabled={isInvalid}
				></HeaderButtons>
			</Footer>
		</>
	);
};

export default withRouter(ConsolePage);
