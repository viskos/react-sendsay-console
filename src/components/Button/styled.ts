import React from 'react';
import styled from 'styled-components';
import logoutImg from '../../assets/log-out.svg';
import fullScreenImg from '../../assets/full-screen.svg';
import fullScreenExitImg from '../../assets/full-screen-exit.svg';
import clearHistoryImg from '../../assets/clear-history.svg';
import formatImg from '../../assets/format.svg';

type TStyledButton = {
	margin?: string;
	fullscreen?: boolean;
};

const StyleButton = styled.button<TStyledButton>`
	width: 110px;
	height: 40px;
	background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
	border-radius: 5px;
	padding: 0 10px;
	margin-top: ${({ margin }) => margin + 'px' || '0'};
	border: none;
	font-size: 16px;
	color: #ffffff;
	cursor: pointer;

	&:hover {
		background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
			linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
	}
	&:focus {
		opacity: 0.5;
		border: 2px solid #45a5ff;
		border-radius: 7px;
		outline: none;
	}
	&:disabled {
		background: linear-gradient(0deg, #c4c4c4, #c4c4c4),
			linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);
	}
`;

const LogoutButton = styled.button<React.CSSProperties>`
	width: 80px;
	text-align: left;
	border: none;
	color: #0d0d0d;
	font-size: 16px;
	outline: none;
	cursor: pointer;
	background: url(${logoutImg}) no-repeat;
	background-position: right;
	margin: 0 10px;
`;

const FullScreenButton = styled.button<TStyledButton>`
	width: 20px;
	height: 20px;
	background: ${({ fullscreen }) =>
		fullscreen ? `url(${fullScreenExitImg}) no-repeat;` : `url(${fullScreenImg}) no-repeat;`};
	border: none;
	outline: none;
	cursor: pointer;
`;

const ClearHistoryButton = styled(FullScreenButton)`
	background: url(${clearHistoryImg}) no-repeat;
	background-position: center;
	border-left: 1px solid #c4c4c4;
	height: 100%;
	width: 50px;
	position: relative;
	margin-left: auto;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -15px;
		width: 15px;
		height: 100%;
		background: linear-gradient(269.93deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);
	}
`;

const FormatButton = styled(LogoutButton)`
	background: url(${formatImg}) no-repeat;
	background-position: left;
	width: 155px;
	text-align: right;
`;

const Styled = {
	StyleButton,
	LogoutButton,
	FullScreenButton,
	ClearHistoryButton,
	FormatButton,
};

export default Styled;
