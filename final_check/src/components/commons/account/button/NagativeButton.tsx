import styled from "@emotion/styled";
import { defaultButton } from "./DefaultButton.style";

const NegativeButton = (props: any) => {
    return (
        <NegativeButton1 type="button" onClick={props.onClick}>
            {props.text}
        </NegativeButton1>
    );
};

export default NegativeButton;

const NegativeButton1 = styled(defaultButton)`
    color: white;
    background-color: black;
`;
