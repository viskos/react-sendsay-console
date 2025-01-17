import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img<React.CSSProperties>`
	width: 24px;
	height: 24px;
	margin-right: 10px;
`;

const ErrorWrapper = styled.div<React.CSSProperties>`
	height: fit-content;
	background: rgba(207, 44, 0, 0.1);
	border-radius: 5px;
	display: flex;
	flex-direction: row;
	padding: 15px 12px 15px 12px;
`;

const ErrorTitle = styled.p<React.CSSProperties>`
	margin: 0 0 10px 0;
	font-size: 18px;
	color: #cf2c00;
`;

const ErrorDescription = styled.p<React.CSSProperties>`
	margin: 0;
	font-size: 12px;
	color: #cf2c00;
	opacity: 0.5;
`;

const Styled = {
	StyledIcon,
	ErrorWrapper,
	ErrorTitle,
	ErrorDescription,
};

export default Styled;
