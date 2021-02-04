import React from 'react'
import styled from 'styled-components'
import dotsImg from '../../assets/dots.svg'

type TStyledProps = {
    isSuccess?: boolean,
    isShow?: boolean,
    destructive?: boolean
}

const DropdownWrapper = styled.div<React.CSSProperties>`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	width: 100%;
    padding: 0;
    position: relative;
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
    visibility: ${({isShow}) => isShow ? 'visible' : 'hidden'};
    height: fit-content;
    width: 130px;
    padding: 5px 0;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    z-index: 100;
    position: sticky;
`

const DropdownItem = styled.div<TStyledProps>`
    font-size: 16px;
    color: #0D0D0D;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
    border-top: ${({destructive}) => destructive ? '1px solid rgba(0, 0, 0, 0.2);' : 'none'};
    &:hover {
        background: ${({destructive}) => destructive ? '#CF2C00' : '#0055FB'};
        color: #FFFFFF;
    }
`

const Styled = {
    DropdownWrapper,
    StyledItem,
    Ring,
    Dots,
    DropdownBody,
    DropdownItem
}

export default Styled