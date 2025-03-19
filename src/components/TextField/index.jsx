import styled from "styled-components";

const TextFieldStyled = styled.input`
height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const TextField = () => {
    return (
        
            <TextFieldStyled>
                <input type="text" placeholder="O que você procura?"/>

            </TextFieldStyled>
        
    )
}

export default TextField