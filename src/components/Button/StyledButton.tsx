import React from 'react';
import Styled from './styled';

type TStyledButton = {
	value?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	type: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
	margin?: string;
};

const { StyleButton } = Styled;

export const StyledButton: React.FC<TStyledButton> = ({
	value,
	onClick,
	type,
	margin,
	disabled,
	children,
}) => (
	<StyleButton margin={margin!} onClick={onClick} type={type} disabled={disabled}>
		{children}
	</StyleButton>
);
