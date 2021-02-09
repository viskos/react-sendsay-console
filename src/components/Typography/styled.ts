import styled from 'styled-components';

type TTypographyProps = {
	size?: string;
	margin?: string;
};

const StyledTypography = styled.p<TTypographyProps>`
	font-size: ${(props) => props.size}px;
	color: #0d0d0d;
	margin: ${({ margin }) => margin || '0'};
`;

const StyledLink = styled.a<TTypographyProps>`
	font-size: 16px;
	line-height: 20px;
	color: #999999;
	text-decoration: none;
	margin-top: ${({ margin }) => margin + 'px' || '0'};
`;

const Styled = {
	StyledTypography,
	StyledLink,
};

export default Styled;
