import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import ConsoleHeader from '../components/ConsoleHeader';
import Logo from '../components/Logo';
import Typography from '../components/Typography';

const ConsolePage: React.FC = () => {
	const { login, sublogin } = useSelector((state: RootStateOrAny) => state.auth);

	return (
		<>
			<ConsoleHeader item="wrapper">
				<ConsoleHeader item="wrapper-item">
					<Logo />
					<Typography size="20">API-консолька</Typography>
				</ConsoleHeader>
				<ConsoleHeader item="user-data">
					<Typography size="16">{login}</Typography>
					<p>:</p>
					<Typography size="16">{sublogin}</Typography>
				</ConsoleHeader>
			</ConsoleHeader>
		</>
	);
};

export default ConsolePage;
