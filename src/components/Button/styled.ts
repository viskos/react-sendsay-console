import React from 'react';
import styled from 'styled-components'
import logoutImg from '../../assets/log-out.svg'
import fullScreenImg from '../../assets/full-screen.svg'
import clearHistoryImg from '../../assets/clear-history.svg'

type TStyledButton = {
    margin: string
}

const StyleButton = styled.button<TStyledButton>`
    width: 110px;
    height: 40px;
    background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
    border-radius: 5px;
    padding: 0 10px;
    margin-top: ${({margin}) => margin+'px' || '0'};
    border: none;
    font-size: 16px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
    }
    &:focus {
        opacity: 0.5;
        border: 2px solid #45A5FF;
        border-radius: 7px;
        outline: none;
    }
    &:disabled {
        background: linear-gradient(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%);
    }
`

const LogoutButton = styled.button<React.CSSProperties>`
    width: 80px;
    text-align: left;
    border: none;
    color: #0D0D0D;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    background: url(${logoutImg}) no-repeat;
    background-position: right;
`

const FullScreenButton = styled.button<React.CSSProperties>`
    width: 20px;
    height: 20px;
    background: url(${fullScreenImg}) no-repeat;
    border: none;
    outline: none;
    cursor: pointer;
`

const ClearHistoryButton = styled(FullScreenButton)`
    background: url(${clearHistoryImg}) no-repeat;
    background-position: center;
    border-left: 1px solid #C4C4C4;
    height: 100%;
    width: 50px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -15px;
        width: 15px;
        height: 100%;
        background: linear-gradient(269.93deg, #F6F6F6 0.06%, rgba(246, 246, 246, 0) 99.93%);
    }
`

const Styled = {
    StyleButton,
    LogoutButton,
    FullScreenButton,
    ClearHistoryButton
}

export default Styled