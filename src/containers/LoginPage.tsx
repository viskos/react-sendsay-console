import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { StyledButton, Typography, Input, LoginError, Logo } from '../components';

import { authenticate } from '../store/actions/auth';

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const StyledForm = styled.section`
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

	const validateLogin = (value: string) => {
		setLogin(value);
		return value ? false : true;
	};

	const validatePassword = (value: string) => {
		setPassword(value);
		return value ? false : true;
	};

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		doLogin();
	};

	return (
		<Wrapper>
			<Logo margin="20" />
			<StyledForm>
				<Typography size="24">API-консолька</Typography>
				<LoginError error='{id: "error/auth/failed", explain: "wrong_credentials"}' />
				<Form
					onSubmit={onSubmit}
					render={({ handleSubmit, submitting }) => (
						<form>
							<Field
								name="login"
								validate={validateLogin}
								render={({ input, meta }) => (
									<>
										<Input
											{...input}
											placeholder="Логин"
											title="Логин"
											error={meta.error}
										/>
									</>
								)}
							/>
							<Input
								value={sublogin}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setSubLogin(e.target.value)
								}
								placeholder="Сублогин"
								title="Сублогин"
								optional
							/>
							<Field
								name="password"
								validate={validatePassword}
								render={({ input, meta }) => (
									<>
										<Input
											{...input}
											placeholder="Пароль"
											title="Пароль"
											error={meta.error}
										/>
										{meta.touched && meta.error && <span>{meta.error}</span>}
									</>
								)}
							/>
							<StyledButton
								value="Войти"
								disabled={submitting}
								onClick={handleSubmit}
								type="submit"
								margin="20"
							/>
						</form>
					)}
				/>
			</StyledForm>
			<A href="https://github.com/viskos">@viskos</A>
		</Wrapper>
	);
};

export default withRouter(LoginPage);
