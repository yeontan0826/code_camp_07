import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { checkFileValidation } from "../../src/commons/libraries/fileValidation";
import { Modal } from "antd";

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

const GraphqlMutationPage = () => {
	// useRef() => 특정 태그를 가르키는 함수(태그를 변수에 넣는다고 생각하면 됨)
	const [uploadFile] = useMutation(UPLOAD_FILE);
	const [callGraphql] = useMutation(CREATE_BOARD);

	const fileRef = useRef<HTMLInputElement>(null);
	const [imageUrl, setImageUrl] = useState("");
	const [inputs, setInputs] = useState({
		writer: "",
		title: "",
		contents: "",
		password: "",
	});

	const onChangeInputs = (event: any) => {
		setInputs({
			...inputs,
			[event.target.id]: event.target.value,
		});
	};

	// 이벤트 핸들러 함수
	const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
		// files는 있을수도 있고, 없을수도 있기때문에 옵셔널 체이닝을 사용
		const file = event.target.files?.[0];
		console.log(file);

		// 사진파일 검증
		const isValid = checkFileValidation(file);
		if (!isValid) return;

		try {
			// 1. uploadFile API 요청하기(요청 결과 URL 받아오기)
			const result = await uploadFile({
				variables: {
					file,
				},
			});

			// 2. 요청 결과 URL을 state애 저장하기
			setImageUrl(result.data.uploadFile.url);
		} catch (error) {
			Modal.error({ content: "에러발생!!" });
		}
	};

	const onClickGraphqlApi = async () => {
		const result = await callGraphql({
			variables: {
				createBoardInput: {
					...inputs,
					password: "1234",
					images: [imageUrl],
				},
			},
		});
		console.log(result);
	};

	const onClickImage = () => {
		fileRef.current?.click();
	};

	return (
		<div>
			작성자: <input type={"text"} id="writer" placeholder={"작성자"} onChange={onChangeInputs} />
			<br />
			제목: <input type={"text"} id="title" placeholder={"제목"} onChange={onChangeInputs} />
			<br />
			내용: <input type={"text"} id="contents" placeholder={"내용"} onChange={onChangeInputs} />
			<br />
			<div>
				<h1>이미지 업로드 연습하기</h1>
				{/* multiple 적용시 여러개 파일 한번에 업로드 */}
				<div
					style={{ width: "50px", height: "50px", backgroundColor: "gray", cursor: "pointer" }}
					onClick={onClickImage}
				>
					이미지 선택
				</div>
				{/* accept="image/jpeg 속성을 사용하면 애초에 사진을 선택하는 창에서 jpeg파일만 고르게 보여준다" */}
				<input style={{ display: "none" }} type="file" ref={fileRef} onChange={onChangeFile} />
				<img src={imageUrl && `https://storage.googleapis.com/${imageUrl}`} />
			</div>
			<button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
		</div>
	);
};

export default GraphqlMutationPage;
