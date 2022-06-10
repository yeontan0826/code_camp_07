import styled from "@emotion/styled";

const CommonInput = (props: any) => {
	return <MyInput type={props.type} placeholder={props.placeholder} {...props.register} />;
};

export default CommonInput;

const MyInput = styled.input`
	width: 200px;
	height: 35px;
	border: 0.8px solid gray;
	margin-bottom: 10px;
	padding: 0 5px;
	::placeholder {
		color: lightgray;
	}
`;
