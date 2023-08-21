import styled from "@emotion/styled";

const ErrorDiv = (props: any) => {
    return <Error>{props.errorText}</Error>;
};

export default ErrorDiv;

const Error = styled.div`
    font-size: 13px;
    color: red;
    margin: 5px 8px 0;
`;
