import React from 'react';
import Styled from './styled';

type TLogoStyled = {
	margin?: string;
};

const { LogoStyled } = Styled;

const Logo: React.FC<TLogoStyled> = ({ margin }) => (
	<LogoStyled src="/icons/logo.svg" margin={margin!} />
);

export default Logo;
