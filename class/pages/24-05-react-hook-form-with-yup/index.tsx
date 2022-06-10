import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 유효성 검사를 위해 스키마 생성
const schema = yup
	.object({
		email: yup.string().email("이메일 형식이 적합하지 않습니다.").required("이메일을 입력해주세요"),
		password: yup
			.string()
			.min(4, "비밀빈호를 최소 4자리 이상입니다.")
			.max(15, "비밀번호는 최대 15자리까지입니다.")
			.required("비밀번호를 입력해주세요"),
	})
	.required();

const ReactHookFormPage = () => {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
		mode: "onChange", // onChange: 입력할떄마다 즉시 검사
	});

	const onClickSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onClickSubmit)}>
			<h2>로그인</h2>
			이메일: <input type={"text"} {...register("email")} />
			<ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
			비밀번호: <input type={"text"} {...register("password")} />
			<ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
			<br />
			<LoginButton isValid={formState.isValid}>로그인</LoginButton>
		</form>
	);
};

export default ReactHookFormPage;

/* styled component */
const ErrorMessage = styled.div`
	color: red;
`;
const LoginButton = styled.button`
	padding: 5px 100px;
	border: none;
	background-color: ${(props: { isValid: boolean }) => (props.isValid ? "yellow" : "gray")};
`;
