import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 200px;
    margin: 200px auto;
`

export const InnerBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

export const InputTitle = styled.span`
    font-size: 12px;
    color: gray;
`

export const WriteInput = styled.input`
    height: 30px;
    outline: none;
`

export const SubmitButton = styled.button`
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 15px;
    transition: 0.5s;
    background-color: gray;
    background-color: ${(props) => 
        props.isActive ? "yellow" : "default"
    };
    cursor: ${(props) => 
        props.isActive ? "pointer" : "default"
    };
`