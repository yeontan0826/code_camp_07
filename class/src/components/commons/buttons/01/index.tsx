import styled from "@emotion/styled";

/* styled component start */
const LoginButton = styled.button`
	padding: 5px 100px;
	border: none;
	background-color: ${(props: { isValid: boolean }) => (props.isValid ? "yellow" : "gray")};
`;
/* styled component end */

const Button01 = (props: any) => {
	return <LoginButton isValid={props.isValid}>{props.title}</LoginButton>;
};

export default Button01;
