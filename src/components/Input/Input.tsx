import React from 'react';
import Styled from './styled';

type StyledInputType = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	title: string;
	optional?: boolean;
	error?: boolean;
	type?: string;
};

const { StyledInput, TitleGrop, P, Small } = Styled;

export const Input: React.FC<StyledInputType> = ({
	value,
	onChange,
	placeholder,
	title,
	optional = false,
	error,
	type,
}) => {
	return (
		<label>
			<TitleGrop>
				<P error={error}>{title}</P>
				<Small optional={optional}>Опционально</Small>
			</TitleGrop>
			<StyledInput
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				error={error}
			/>
		</label>
	);
};
