import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const ReactHookFormPage = () => {
	const { register, handleSubmit } = useForm();

	const onClickSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onClickSubmit)}>
			작성자: <input type={"text"} {...register("writer")} />
			<ErrorMessage>작성자를 입력해주세요</ErrorMessage>
			비밀번호: <input type={"password"} {...register("password")} />
			<ErrorMessage>비밀번호를 입력해주세요</ErrorMessage>
			제목: <input type={"text"} {...register("title")} />
			<ErrorMessage>제목을 입력해주세요</ErrorMessage>
			내용: <input type={"text"} {...register("contents")} />
			<ErrorMessage>내용을 입력해주세요</ErrorMessage>
			<button>게시물 등록하기</button>
		</form>
	);
};

export default ReactHookFormPage;

const ErrorMessage = styled.div`
	color: red;
`;
