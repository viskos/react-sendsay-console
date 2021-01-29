import React from 'react';
import Styled from './styled';

type StyledButtonType = {
	value: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	type: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
};

const { StyledButton } = Styled;

const Button: React.FC<StyledButtonType> = ({ value, onClick, type, disabled }) => (
	<StyledButton onClick={onClick} type={type} disabled={disabled}>
		{value}
	</StyledButton>
);

export default Button;
