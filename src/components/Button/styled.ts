import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button<React.CSSProperties>`
    width: 110px;
    height: 40px;
    background: linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
    border-radius: 5px;
    padding: 0 10px;
    margin-top: 20px;
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

const Styled = {
    StyledButton
}

export default Styled