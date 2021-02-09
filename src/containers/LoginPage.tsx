import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import {
	StyledButton,
	Typography,
	Input,
	LoginError,
	Logo,
	FormWrapper,
	StyledForm,
} from '../components';

import { asyncAuthUser, asyncCheckAuth } from '../store/slices/authSlice';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
	const dispatch = useDispatch();
	const [login, setLogin] = useState<string>('');
	const [sublogin, setSubLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const loading = useSelector((state: RootStateOrAny) => state.auth.loading);
	const isLoggedIn = useSelector((state: RootStateOrAny) => !!state.auth.sessionKey?.length);
	const error = useSelector((state: RootStateOrAny) => state.auth.asyncAuthResErr);

	useEffect(() => {
		if (isLoggedIn) {
			history.push('/console');
		}
	}, [isLoggedIn]);

	useEffect(() => {
		dispatch(asyncCheckAuth());
	}, []);

	const validateLogin = (value: string) => {
		setLogin(value);
		return value ? false : true;
	};

	const validatePassword = (value: string) => {
		setPassword(value);
		return value ? false : true;
	};

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		dispatch(
			asyncAuthUser({
				login,
				sublogin,
				password,
			})
		);
	};

	return (
		<FormWrapper>
			<Logo margin="20" />
			<StyledForm>
				<Typography size="24">API-консолька</Typography>
				{error ? <LoginError error={JSON.stringify(error)} /> : null}
				<Form
					onSubmit={onSubmit}
					render={({ pristine }) => {
						return (
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
												// type="password"
												error={meta.error}
											/>
											{meta.touched && meta.error && <span>{meta.error}</span>}
										</>
									)}
								/>
								<StyledButton
									onClick={onSubmit}
									value="Войти"
									disabled={pristine}
									type="submit"
									margin="20"
								/>
							</form>
						);
					}}
				/>
			</StyledForm>
			<Typography link="https://github.com/viskos" margin={'20'}>
				@viskos
			</Typography>
		</FormWrapper>
	);
};

export default withRouter(LoginPage);
