import React from 'react';
import Styled from './styled';

const { H1 } = Styled;

export const Typography: React.FC<{ size: string; margin?: string }> = ({
	size,
	margin,
	children,
}) => (
	<H1 size={size} margin={margin}>
		{children}
	</H1>
);
