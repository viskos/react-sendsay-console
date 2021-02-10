import styled from 'styled-components';

type TStyledTextAreaProps = {
	isInvalid?: boolean;
	isError?: boolean;
};

const StyledTextArea = styled.textarea<TStyledTextAreaProps>`
    background: #ffffff;
    border: ${({ isInvalid, isError }) =>
			isInvalid || isError ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)'};
    box-shadow: ${({ isInvalid, isError }) =>
			isInvalid || isError ? '0px 0px 5px rgba(207, 44, 0, 0.5);' : 'none;'}
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;
const PaneWrapper = styled.div<React.CSSProperties>`
	padding: 15px 0 15px 0;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
`;

const Styled = {
	StyledTextArea,
	PaneWrapper,
};

export default Styled;
