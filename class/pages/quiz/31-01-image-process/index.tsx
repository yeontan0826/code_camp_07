import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			_id
			writer
			title
			contents
			images
		}
	}
`;

const UPLOAD_FILE = gql`
	mutation uploadFile($file: Upload!) {
		uploadFile(file: $file) {
			url
		}
	}
`;

const ImageProcessPage = () => {
	const [createBoard] = useMutation(CREATE_BOARD);
	const [uploadFile] = useMutation(UPLOAD_FILE);

	const [inputs, setInputs] = useState({
		writer: "",
		password: "",
		title: "",
		contents: "",
	});
	const [imgUrl, setImgUrl] = useState("");
	const [file, setFile] = useState<File>();

	const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[event.target.id]: event.target.value,
		});
	};

	const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (!file) {
			alert("파일이 없습니다.");
			return;
		}

		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = (data) => {
			if (typeof data.target?.result === "string") {
				console.log(data.target?.result);
				setImgUrl(data.target?.result);
				setFile(file);
			}
		};
	};

	const onClickSave = async () => {
		try {
			let url = "";
			if (file) {
				const resultFile = await uploadFile({
					variables: { file },
				});
				url = resultFile.data.uploadFile.url;
			}

			const result = await createBoard({
				variables: {
					createBoardInput: {
						...inputs,
						images: [url],
					},
				},
			});
			console.log(result);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<input id="writer" type={"text"} placeholder={"작성자"} onChange={onChangeInputs} />
			<br />
			<input id="password" type={"password"} placeholder={"비밀번호"} onChange={onChangeInputs} />
			<br />
			<input id="title" type={"text"} placeholder={"제목"} onChange={onChangeInputs} />
			<br />
			<input id="contents" type={"text"} placeholder={"내용"} onChange={onChangeInputs} />
			<br />
			<input type={"file"} onChange={onChangeFile} />
			<br />
			<img src={imgUrl} />
			<br />
			<button onClick={onClickSave}>저장하기</button>
		</div>
	);
};

export default ImageProcessPage;
