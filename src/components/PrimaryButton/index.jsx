import styled from "styled-components"

const Button = styled.button`
    background-color: transparent;
    border: 3px solid #C98CF1;
    color: #D9D9D9;
    padding: 16px;
    border-radius: 14px;
    font-weight: 600;
    &:hover {
        cursor: pointer;
        
    }
`


const PrimaryButton = ({ children }) => {
    return (
        <Button>{children}</Button>
    )
}

export default Button