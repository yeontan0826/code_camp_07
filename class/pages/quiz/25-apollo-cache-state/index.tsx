import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const FETCH_BOARDS = gql`
	query fetchBoards {
		fetchBoards {
			_id
			writer
			title
			contents
		}
	}
`;

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

const DELETE_BOARD = gql`
	mutation deleteBoard($boardId: ID!) {
		deleteBoard(boardId: $boardId)
	}
`;

const ApolloCacheStatePage = () => {
	const { data } = useQuery(FETCH_BOARDS);
	const [createBoard] = useMutation(CREATE_BOARD);
	const [deleteBoard] = useMutation(DELETE_BOARD);

	const { register, handleSubmit } = useForm();

	const onClickSubmit = async (data: any) => {
		try {
			await createBoard({
				variables: {
					createBoardInput: data,
				},
				// refetchQueries: [{ query: FETCH_BOARDS }],
				update(cache, { data }) {
					cache.modify({
						fields: {
							fetchBoards: (prev) => {
								return [data.createBoard, ...prev];
							},
						},
					});
				},
			});
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const onClickDelete = (boardId: string) => async () => {
		try {
			await deleteBoard({
				variables: {
					boardId,
				},
				// refetchQueries: [{ query: FETCH_BOARDS }],
				update(cache, { data }) {
					cache.modify({
						fields: {
							fetchBoards: (prev, { readField }) => {
								const deleteId = data.deleteBoard;
								const filteredPrev = prev.filter((el: any) => readField("_id", el) !== deleteId);
								return [...filteredPrev];
							},
						},
					});
				},
			});
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div style={{ padding: "20px" }}>
			{/* 게시글 등록 */}
			<form onSubmit={handleSubmit(onClickSubmit)}>
				<MyInput type={"text"} placeholder={"작성자"} {...register("writer")} />
				<br />
				<MyInput type={"password"} placeholder={"비밀번호"} {...register("password")} />
				<br />
				<MyInput type={"text"} placeholder={"제목"} {...register("title")} />
				<br />
				<MyInput type={"text"} placeholder={"내용"} {...register("contents")} />
				<br />
				<MyButton>등록하기</MyButton>
			</form>
			{/* 게시글 목록 불러오기(1page) */}
			<MyColumn>
				<MyRow style={{ fontWeight: "bold", borderBottom: "1px solid black" }}>
					<MyItem>작성자</MyItem>
					<MyItem>제목</MyItem>
					<MyItem>내용</MyItem>
				</MyRow>
				{data?.fetchBoards.map((el: any) => (
					<MyRow key={el._id}>
						<MyItem>{el.writer}</MyItem>
						<MyItem>{el.title}</MyItem>
						<MyItem>{el.contents}</MyItem>
						<button onClick={onClickDelete(el._id)}>X</button>
					</MyRow>
				))}
			</MyColumn>
		</div>
	);
};

export default ApolloCacheStatePage;

const MyColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
`;

const MyInput = styled.input`
	width: 300px;
	height: 35px;
	margin-bottom: 15px;
`;

const MyButton = styled.button`
	width: 300px;
	height: 35px;
`;

const MyRow = styled.div`
	display: flex;
	line-height: 30px;
`;

const MyItem = styled.div`
	width: 20%;
`;
