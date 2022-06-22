import { gql, useMutation } from "@apollo/client";
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

	// const [imageUrl, setImageUrl] = useState("");
	// const [file, setFile] = useState<File>();
	const [imageUrls, setImageUrls] = useState(["", "", ""]);
	const [files, setFiles] = useState<(File | undefined)[]>([undefined, undefined, undefined]);

	const onChangeFile = (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		console.log(file);

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

				const tempUrls = [...imageUrls];
				tempUrls[idx] = data.target?.result;
				setImageUrls(tempUrls);

				const tempFiles = [...files];
				tempFiles[idx] = file;
				setFiles(tempFiles);
				// setImageUrl(data.target?.result);
				// setFile(file);
			}
		};

		// // 임시 미리보기(내 컴퓨터에서만 볼 수 있는 주소) - 바로 백엔드로 전송 금지(가짜주소)
		// const result = URL.createObjectURL(file)
		// console.log(result)
	};

	const onClickGraphqlApi = async () => {
		// 1. uploadFile들을 Promise.all로 묶기
		// const results = await Promise.all([
		//     uploadFile({ variables: { file: files[0] }}),
		//     uploadFile({ variables: { file: files[1] }}),
		//     uploadFile({ variables: { file: files[2] }})
		// ])

		// 2. uploadFile들을 맵으로 묶기
		// const results = await Promise.all([
		//     undefined,
		//     uploadFile({ variables: { files}}),
		//     undefined
		// ])
		// files.map(el => el && uploadFile({ variables: { file: el}}))

		// 3. 최종버전
		const results = await Promise.all(files.map((el) => el && uploadFile({ variables: { file: el } })));
		const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // [url1, url2, url3]

		const result = await callGraphql({
			variables: {
				createBoardInput: {
					writer: "작성자",
					title: "타이틀!!",
					contents: "내용!!",
					password: "1234",
					images: resultUrls, // [url1, url2, url3]
				},
			},
		});
		console.log(result);
	};

	// https://storage.googleapis.com/${}
	return (
		<>
			<input type={"file"} onChange={onChangeFile(0)} />
			<input type={"file"} onChange={onChangeFile(1)} />
			<input type={"file"} onChange={onChangeFile(2)} />
			<img src={imageUrls[0]} />
			<img src={imageUrls[1]} />
			<img src={imageUrls[2]} />
			<button onClick={onClickGraphqlApi}>등록하기</button>
		</>
	);
};

export default ImageUploadSubmitPage;
