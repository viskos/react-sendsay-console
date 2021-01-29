import React from 'react';
import Styled from './styled';

type StyledInputType = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	title: string;
	optional?: boolean;
};

const { StyledInput, TitleGrop, P, Small } = Styled;

const Input: React.FC<StyledInputType> = ({
	value,
	onChange,
	placeholder,
	title,
	optional = false,
}) => (
	<label>
		<TitleGrop>
			<P>{title}</P>
			<Small optional={optional}>Опционально</Small>
		</TitleGrop>
		<StyledInput value={value} onChange={onChange} placeholder={placeholder} />
	</label>
);

export default Input;
