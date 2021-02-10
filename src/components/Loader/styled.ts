import React from 'react';
import styled, { keyframes } from 'styled-components';
import loaderImg from '../../assets/loader.svg';

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div<React.CSSProperties>`
	background: url(${loaderImg}) no-repeat;
	background-position: center;
	width: 100%;
	height: 100%;
	animation: ${Spin} 1.2s linear infinite;
`;

const Styled = {
	Spinner,
};

export default Styled;
