import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";

/* styled component start */
const ErrorMessage = styled.div`
	color: red;
`;
/* styled components end */

// 유효성 검사를 위해 스키마 생성
const schema = yup
	.object({
		email: yup.string().email("이메일 형식이 적합하지 않습니다.").required("이메일을 입력해주세요"),
		password: yup
			.string()
			.min(4, "비밀빈호를 최소 4자리 이상입니다.")
			.max(15, "비밀번호는 최대 15자리까지입니다.")
			.required("비밀번호를 입력해주세요"),
		phone: yup.string().matches("010-0000-0000", "휴대폰 형식에 알맞지 않습니다"),
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
			이메일: <Input01 register={register("email")} type="email" />
			<ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
			비밀번호: <Input01 register={register("password")} type="password" />
			<ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
			<br />
			<Button01 isValid={formState.isValid} title="로그인" />
		</form>
	);
};

export default ReactHookFormPage;
