import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ConsoleHeader from '../components/ConsoleHeader';
import Logo from '../components/Logo';
import { logout } from '../store/actions/auth';
import { Dropdown, DropdownItem, HeaderButtons, Typography } from '../components';

const ConsolePage: React.FC = () => {
	const { login, sublogin } = useSelector((state: RootStateOrAny) => state.auth);
	const dispatch = useDispatch();

	const handlelogoutLogOut = () => {
		dispatch(logout());
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
				<DropdownItem isSuccess>track.getgetgetgetget</DropdownItem>
				<DropdownItem>track.getgetgetgetget</DropdownItem>
			</Dropdown>
		</>
	);
};

export default ConsolePage;
