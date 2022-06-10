import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
			작성자: <input type={"text"} {...register("writer")} />
			<ErrorMessage>{formState.errors.writer?.message}</ErrorMessage>
			비밀번호: <input type={"password"} {...register("password")} />
			<ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
			제목: <input type={"text"} {...register("title")} />
			<ErrorMessage>{formState.errors.title?.message}</ErrorMessage>
			내용: <input type={"text"} {...register("contents")} />
			<ErrorMessage>{formState.errors.contents?.message}</ErrorMessage>
			<button>게시물 등록하기</button>
		</form>
	);
};

export default ReactHookFormPage;

const ErrorMessage = styled.div`
	color: red;
`;
