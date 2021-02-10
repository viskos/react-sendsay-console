import React from 'react';
import styled from 'styled-components';

type TInputProps = {
	optional?: boolean;
	error?: boolean;
};

const StyledInput = styled.input<TInputProps>`
	width: 100%;
	height: 40px;
	background: #ffffff;
	border: ${({ error }) => (error ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)')};
	border-radius: 5px;
	box-shadow: ${({ error }) => (error ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
	font-size: 18px;
	color: #0d0d0d;
	padding: 0 10px;
	&:hover {
		border: ${({ error }) => (error ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.4)')};
		cursor: pointer;
	}
	&:focus {
		border: ${({ error }) => (error ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.4)')};
		outline: none;
	}
`;

const TitleGrop = styled.div<React.CSSProperties>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
`;

const P = styled.p<TInputProps>`
	margin: 0 0 5px 0;
	font-size: 16px;
	color: ${({ error }) => (error ? '#CF2C00' : '#0D0D0D')};
`;

const Small = styled.small<TInputProps>`
	font-size: 12px;
	color: #999999;
	display: ${({ optional }) => (optional ? 'block' : 'none')};
`;

const Styled = {
	StyledInput,
	TitleGrop,
	P,
	Small,
};

export default Styled;
