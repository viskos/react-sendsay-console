import styled from 'styled-components'

type TH1 = {
    size: string
}

const H1 = styled.p<TH1>`
    font-size: ${props => props.size}px;
	line-height: 30px;
	color: #0d0d0d;
	margin: 0;
`

const Styled = {
    H1
}

export default Styled