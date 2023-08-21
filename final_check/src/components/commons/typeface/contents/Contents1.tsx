import styled from "@emotion/styled";

const Contents1 = (props: any) => {
    return <Contents1Span>{props.text}</Contents1Span>;
};

export default Contents1;

const Contents1Span = styled.span`
    font-size: 14px;
    font-weight: normal;
`;
