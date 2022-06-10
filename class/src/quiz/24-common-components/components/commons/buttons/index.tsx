import styled from "@emotion/styled";

const CommonButton = (props: any) => {
	return (
		<MyButton disabled={props.disabled} isActive={props.isActive}>
			{props.text}
		</MyButton>
	);
};

export default CommonButton;

const MyButton = styled.button`
	width: 250px;
	height: 40px;
	border-radius: 20px;
	background-color: purple;
	color: white;
	border: none;
	cursor: pointer;
	:disabled {
		cursor: default;
		background-color: gray;
	}
	/* cursor: ${(props: { isActive: boolean }) => (props.isActive ? "pointer" : "default")}; */
	/* background-color: ${(props: { isActive: boolean }) => (props.isActive ? "purple" : "gray")}; */
`;
