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

const WebEditorSubmitPage = () => {
	const router = useRouter();
	const [createBoard] = useMutation(CREATE_BOARD);

	const { register, handleSubmit, setValue, trigger } = useForm({
		mode: "onChange",
	});

	const onChangeContents = (value: string) => {
		console.log(value);

		// register로 등록하지 않고, 강제로 넣어주는 기능
		setValue("contents", value === "<p><br/></p>" ? "" : value);

		// onChange 됐다고 react-hook-forma에 알려주는 기능
		trigger("contents");
	};

	const onClickSubmit = async (data: any) => {
		console.log(data);

		// if (!data.writer || !data.password || !data.title || !data.contents) {
		if (!(data.writer && data.password && data.title && data.contents)) {
			Modal.error({ content: "모두 입력해 주세요." });
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
					router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`);
				},
			});
		} catch (error: any) {
			console.log(error.message);
			Modal.error({
				title: "등록 실패",
				content: error.message,
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onClickSubmit)}>
			작성자: <input type={"text"} {...register("writer")} />
			<br />
			비밀번호: <input type={"password"} {...register("password")} />
			<br />
			제목: <input type={"text"} {...register("title")} />
			<br />
			내용: <ReactQuill onChange={onChangeContents} />
			<br />
			<button>등록하기</button>
		</form>
	);
};

export default WebEditorSubmitPage;
