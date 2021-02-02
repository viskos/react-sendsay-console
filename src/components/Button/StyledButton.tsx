import React from 'react';
import Styled from './styled';

type TStyledButton = {
	value: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	type: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
};

const { StyleButton } = Styled;

export const StyledButton: React.FC<TStyledButton> = ({ value, onClick, type, disabled }) => (
	<StyleButton onClick={onClick} type={type} disabled={disabled}>
		{value}
	</StyleButton>
);
