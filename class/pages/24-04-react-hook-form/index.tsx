import { useForm } from "react-hook-form";

const ReactHookFormPage = () => {
	const { register, handleSubmit } = useForm();

	const onClickSubmit = (data: any) => {
		console.log(data);
	};

	console.log("리렌더링 체크!!!");

	return (
		<form onSubmit={handleSubmit(onClickSubmit)}>
			<input type={"text"} placeholder="작성자" {...register("writer")} />
			<br />
			<input type={"text"} placeholder="제목" {...register("title")} />
			<br />
			<input type={"text"} placeholder="내용" {...register("contents")} />
			<br />
			<input type={"text"} placeholder="주소" {...register("boardAddress.addressDetail")} />
			<button>등록하기</button>
		</form>
	);
};

export default ReactHookFormPage;
