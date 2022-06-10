import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonInput from "../../../src/quiz/24-common-components/components/commons/inputs";
import CommonButton from "../../../src/quiz/24-common-components/components/commons/buttons";

const schema = yup.object({
	writer: yup.string().max(5, "작성자는 최대 5자리까지 입니다.").required("작성자를 입력해주세요"),
	password: yup.string().max(8, "비밀번호는 최대 8자리까지 입니다.").required("비밀번호를 입력해주세요"),
	title: yup.string().max(1000, "제목은 최대 1000자까지 입니다.").required("제목을 입력해주세요"),
	contents: yup.string().max(1000, "내용을 최대 1000자까지 입니다.").required("내용을 입력해주세요"),
});

const ReactHookFormPage = () => {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const onClickSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onClickSubmit)}>
			작성자: <CommonInput type={"text"} placeholder={"작성자를 입력해주세요"} register={register("writer")} />
			<ErrorMessage>{formState.errors.writer?.message}</ErrorMessage>
			비밀번호:{" "}
			<CommonInput type={"password"} placeholder={"비밀번호를 입력해주세요"} register={register("password")} />
			<ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
			제목: <CommonInput type={"text"} placeholder={"제목을 입력해주세요"} register={register("title")} />
			<ErrorMessage>{formState.errors.title?.message}</ErrorMessage>
			내용: <CommonInput type={"text"} placeholder={"내용을 입력해주세요"} register={register("contents")} />
			<ErrorMessage>{formState.errors.contents?.message}</ErrorMessage>
			<CommonButton disabled={!formState.isValid} text={"등록하기"} isActive={formState.isValid} />
		</form>
	);
};

export default ReactHookFormPage;

const ErrorMessage = styled.div`
	color: red;
`;
