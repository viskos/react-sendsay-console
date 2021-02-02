import React from 'react'
import styled from 'styled-components'
import dotsImg from '../../assets/dots.svg'

type TStyledProps = {
    isSuccess?: boolean,
    isShow?: boolean
}

const DropdownWrapper = styled.div<React.CSSProperties>`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px 0 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Dots = styled.div<React.CSSProperties>`
    background: url(${dotsImg}) no-repeat;
    width: 12px;
    height: 20px;
`

const Ring = styled.div<TStyledProps>`
    width: 10px;
    height: 10px;
    background: ${({isSuccess}) => isSuccess ? '#30B800' : '#CF2C00'};
    border-radius: 50%;
`

const StyledItem = styled.div<React.CSSProperties>`
    background: #FFFFFF;
    margin-right: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const DropdownBody = styled.div<TStyledProps>`
    display: ${({isShow}) => isShow ? 'blocl' : 'none'};
    height: 140px;
    padding: 5px 0;
`

const Styled = {
    DropdownWrapper,
    StyledItem,
    Ring,
    Dots,
    DropdownBody
}

export default Styled