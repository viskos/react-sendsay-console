import styled from 'styled-components'

type TLogoStyled = {
    margin: string
}

const LogoStyled = styled.img<TLogoStyled>`
    width: 115px;
    height: 30px;
	margin-bottom: ${props => props.margin}px;
`;

const Styled = {
    LogoStyled
}

export default Styled