import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { logout } from '../vanillaStore/actions/auth';
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

const ConsolePage: React.FC = () => {
	const { login, sublogin } = useSelector((state: RootStateOrAny) => state.auth);

	const dispatch = useDispatch();

	const handlelogoutLogOut = () => {
		dispatch(logout());
	};

	const historyItems = [
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
		'tack.get',
	];

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
					{historyItems.map((i, index) => (
						<DropdownItem key={index} isSuccess>
							{i}
						</DropdownItem>
					))}
				</Scrollable>
				<HeaderButtons type="clear-history">X</HeaderButtons>
			</Dropdown>
			<div style={{ background: 'white', height: '100%', position: 'relative' }}>
				<SplitConsole />
			</div>
			<Footer>
				<StyledButton value="Отправить" type="button" />
				<a href="https://github.com/viskos">@viskos</a>
				<button>Форматировать</button>
			</Footer>
		</>
	);
};

export default ConsolePage;
