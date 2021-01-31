import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import LoginError from '../components/LoginError';
import Logo from '../components/Logo';
import Typography from '../components/Typography';

import { authenticate } from '../store/actions/auth';

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Form = styled.section`
	width: 520px;
	height: fit-content;
	left: calc(50% - 520px / 2);
	top: 222px;
	background: #ffffff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 40px 30px;
`;

const A = styled.a`
	font-size: 16px;
	line-height: 20px;
	color: #999999;
	text-decoration: none;
	margin-top: 20px;
`;

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
	const dispatch = useDispatch();
	const [login, setLogin] = useState<string>('');
	const [sublogin, setSubLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const loading = useSelector((state: RootStateOrAny) => state.auth.loading);
	const isLoggedIn = useSelector((state: RootStateOrAny) => !!state.auth.sessionKey?.length);
	console.log('loading', loading);

	useEffect(() => {
		if (isLoggedIn) {
			history.push('/console');
		}
	}, [isLoggedIn]);

	const doLogin = (): void => {
		dispatch(
			authenticate({
				login,
				sublogin,
				password,
			})
		);
	};

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		doLogin();
		console.log('submitted');
	};

	return (
		<Wrapper>
			<Logo margin="20" />
			<Form>
				<Typography size="24">API-консолька</Typography>
				<LoginError error='{id: "error/auth/failed", explain: "wrong_credentials"}' />
				<Input
					value={login}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
					placeholder="Логин"
					title="Логин"
				/>
				<Input
					value={sublogin}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubLogin(e.target.value)}
					placeholder="Сублогин"
					title="Сублогин"
					optional
				/>
				<Input
					value={password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
					placeholder="Пароль"
					title="Пароль"
				/>
				<Button value="Войти" onClick={onSubmit} type="submit" disabled={!login || !password} />
			</Form>
			<A href="https://github.com/viskos">@viskos</A>
		</Wrapper>
	);
};

export default withRouter(LoginPage);
