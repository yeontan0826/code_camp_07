import styled from "@emotion/styled";
import { defaultButton } from "./DefaultButton.style";

const PositiveButton = (props: any) => {
    return <PositiveButton1 type={"submit"}>{props.text}</PositiveButton1>;
};

export default PositiveButton;

const PositiveButton1 = styled(defaultButton)`
    background-color: #ffe004;
`;
