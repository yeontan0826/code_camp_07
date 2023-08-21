import styled from "@emotion/styled";

const TitleSub = (props: any) => {
    return <TitleSubSpan>{props.text}</TitleSubSpan>;
};

export default TitleSub;

const TitleSubSpan = styled.span`
    font-size: 16px;
    font-weight: normal;
`;
