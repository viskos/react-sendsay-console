import React from 'react';
import Styled from './styled';

export const Footer: React.FC = ({ children }) => {
	const { Footer } = Styled;
	return <Footer>{children}</Footer>;
};
