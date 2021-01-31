import React from 'react';
import Styled from './styled';

const LoginError: React.FC<{ error: string }> = ({ error }) => {
	const { StyledIcon, ErrorWrapper, ErrorTitle, ErrorDescription } = Styled;

	return (
		<ErrorWrapper>
			<StyledIcon src="/icons/login-error.svg" />
			<div>
				<ErrorTitle>Вход не вышел</ErrorTitle>
				<ErrorDescription>{error}</ErrorDescription>
			</div>
		</ErrorWrapper>
	);
};

export default LoginError;
