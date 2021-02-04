import React from 'react';
import Styled from './styled';

type TLogoStyled = {
	margin?: string;
};

const { LogoStyled } = Styled;

export const Logo: React.FC<TLogoStyled> = ({ margin }) => (
	<LogoStyled src="/icons/logo.svg" margin={margin!} />
);
