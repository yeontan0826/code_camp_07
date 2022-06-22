import { gql, useMutation } from "@apollo/client";
import axios from "axios";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			_id
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

const ImageUploadSubmitPage = () => {
	const [uploadFile] = useMutation(UPLOAD_FILE);
	const [callGraphql] = useMutation(CREATE_BOARD);

	const [imageUrl, setImageUrl] = useState("");
	const [file, setFile] = useState<File>();

	const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (!file) {
			alert("파일이 없습니다");
			return;
		}

		// 미리보기(실제 파일 생성) - 바로 백엔드로 전송 금지(용량떄문에)
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = (data) => {
			if (typeof data.target?.result === "string") {
				console.log(data.target?.result);
				setImageUrl(data.target?.result);
				setFile(file);
			}
		};

		// 임시 미리보기(내 컴퓨터에서만 볼 수 있는 주소) - 바로 백엔드로 전송 금지(가짜주소)
		// const result = URL.createObjectURL(file);
		// console.log(result);
	};

	const onClickGraphqlApi = async () => {
		const resultFile = await uploadFile({
			variables: {
				file,
			},
		});
		const url = resultFile.data.uploadFile.url;

		const result = await callGraphql({
			variables: {
				createBoardInput: {
					writer: "작성자",
					title: "타이틀!!",
					contents: "내용!!",
					password: "1234",
					images: [url],
				},
			},
		});
		console.log(result);
	};

	// https://storage.googleapis.com/${}
	return (
		<>
			<input type={"file"} onChange={onChangeFile} />
			<img src={imageUrl} />
			<button onClick={onClickGraphqlApi}>등록하기</button>
		</>
	);
};

export default ImageUploadSubmitPage;
