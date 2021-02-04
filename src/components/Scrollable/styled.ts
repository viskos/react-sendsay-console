import React from 'react'
import styled from 'styled-components'

const ScrollableWrapper = styled.div<React.CSSProperties>`
    display: flex;
	width: calc(100% - 50px);
	overflow-x: hidden;
	padding: 0;
	position: absolute;
	top: 20%;
`

const Styled = {
    ScrollableWrapper
}

export default Styled
