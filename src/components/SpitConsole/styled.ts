import styled from 'styled-components'

type TStyledTextAreaProps = {
    isInvalid?: boolean
    isError?: boolean
}

const StyledTextArea = styled.textarea<TStyledTextAreaProps>`
    background: #ffffff;
    border: ${({isInvalid, isError}) => isInvalid || isError ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)'};
    box-shadow: ${({isInvalid, isError}) => isInvalid || isError ? '0px 0px 5px rgba(207, 44, 0, 0.5);' : 'none;'}
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
`

const Styled = {
    StyledTextArea
}

export default Styled