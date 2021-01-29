import React from 'react';
import styled from 'styled-components'

type PropsType = {
    optional: boolean
}

const StyledInput = styled.input<React.CSSProperties>`
    width: 100%;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 18px;
    color: #0D0D0D;
    padding: 0 10px;
    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
    &:focus {
        border: 1px solid rgba(0, 0, 0, 0.4);
        outline: none;
    }
`

const TitleGrop = styled.div<React.CSSProperties>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

const P = styled.p<React.CSSProperties>`
    margin: 0 0 5px 0;
    font-size: 16px;
    color: #0D0D0D;
`

const Small = styled.small<PropsType>`
    font-size: 12px;
    color: #999999;
    display: ${(props) => props.optional ? 'block' : 'none'}
`

const Styled = {
    StyledInput,
    TitleGrop,
    P,
    Small
}

export default Styled