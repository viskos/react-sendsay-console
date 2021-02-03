import React, { useRef, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ConsoleHeader from '../components/ConsoleHeader';
import Logo from '../components/Logo';
import { logout } from '../store/actions/auth';
import {
	Dropdown,
	DropdownItem,
	Footer,
	HeaderButtons,
	SplitConsole,
	StyledButton,
	Typography,
} from '../components';
import './style.css';

const ConsolePage: React.FC = () => {
	const { login, sublogin } = useSelector((state: RootStateOrAny) => state.auth);

	const divRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (divRef.current) {
			console.log(`hookRef div width: ${divRef.current.scrollLeft}`);
			divRef.current.scrollLeft = divRef.current.scrollWidth;
		}
	}, []);

	const onWheel = () => {
		if (divRef.current) {
			console.log(`hookRef div width: ${divRef.current.scrollLeft}`);
			divRef.current.scrollLeft = divRef.current.scrollWidth + 10;
		}
	};

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
				<div className="suka" onWheel={onWheel} ref={divRef}>
					{historyItems.map((i, index) => (
						<DropdownItem key={index} isSuccess>
							{i}
						</DropdownItem>
					))}
				</div>
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
