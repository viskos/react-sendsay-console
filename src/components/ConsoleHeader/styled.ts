import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div<React.CSSProperties>`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px 0 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    justify-content: space-between;
`

const HeaderItem = styled.div<React.CSSProperties>`
    display: flex;
    align-items: center;
`

const UserData = styled.div<React.CSSProperties>`
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 15px 0 15px;
`

const Styled = {
    HeaderWrapper,
    HeaderItem,
    UserData
}

export default Styled