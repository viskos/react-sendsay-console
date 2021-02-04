import React from 'react';
import Styled from './styled';

type StyledInputType = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	title: string;
	optional?: boolean;
	error?: boolean;
};

const { StyledInput, TitleGrop, P, Small } = Styled;

export const Input: React.FC<StyledInputType> = ({
	value,
	onChange,
	placeholder,
	title,
	optional = false,
	error,
}) => {
	return (
		<label>
			<TitleGrop>
				<P error={error}>{title}</P>
				<Small optional={optional}>Опционально</Small>
			</TitleGrop>
			<StyledInput value={value} onChange={onChange} placeholder={placeholder} error={error} />
		</label>
	);
};
