import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<React.CSSProperties>`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Form = styled.section<React.CSSProperties>`
	width: 520px;
	height: fit-content;
	left: calc(50% - 520px / 2);
	top: 222px;
	background: #ffffff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 40px 30px;
`;

const Styled = {
	Wrapper,
	Form,
};

export default Styled;
