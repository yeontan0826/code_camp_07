import styled from "@emotion/styled";

const Title = (props: any) => {
    return <TitleSpan>{props.text}</TitleSpan>;
};

export default Title;

const TitleSpan = styled.span`
    font-size: 22px;
    font-weight: bold;
`;
