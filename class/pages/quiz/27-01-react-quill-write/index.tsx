import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			_id
			writer
			title
			contents
		}
	}
`;

const ReactQuillWritePage = () => {
	const router = useRouter();
	const [createBoard] = useMutation(CREATE_BOARD);

	const { register, handleSubmit, setValue, trigger } = useForm({
		mode: "onChange",
	});

	const onChangeContents = (value: string) => {
		setValue("contents", value === "<p><br/></p" ? "" : value);
		trigger("contents");
	};

	const onClickSubmit = async (data: any) => {
		console.log(data);
		if (!(data.writer && data.password && data.title && data.contents)) {
			Modal.error({ content: "빈 칸 없이 입력해 주세요." });
			return;
		}

		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						writer: data.writer,
						password: data.password,
						title: data.title,
						contents: data.contents,
					},
				},
			});

			Modal.success({
				content: "등록 성공",
				onOk() {
					router.push(`/quiz/27-02-react-quill-detail/${result.data.createBoard._id}`);
				},
			});
		} catch (error: any) {
			console.log(error.message);
			Modal.error({ content: "등록 실패" });
		}
	};

	return (
		<form onSubmit={handleSubmit(onClickSubmit)}>
			<input type={"text"} placeholder={"작성자"} {...register("writer")} />
			<br />
			<input type={"password"} placeholder={"비밀번호"} {...register("password")} />
			<br />
			<input type={"title"} placeholder={"제목"} {...register("title")} />
			<br />
			<ReactQuill onChange={onChangeContents} />
			<button>등록하기</button>
		</form>
	);
};

export default ReactQuillWritePage;
