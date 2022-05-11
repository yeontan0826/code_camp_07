import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column; 
`

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Input = styled.input`
    width: 200px;
    height: 30px;
    outline: none;
    &:focus {
        border: 1px solid red;  
    }
`

export const RegisterButton = styled.button`
    height: 30px;
    border: none;
    color: white;
    border-radius: 15px;
    transition: 0.5s;
    background-color: purple;
    &:hover {
        transition: 0.5s;
        background-color: black;
    }
`