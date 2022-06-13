import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

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

const DELETE_BOARD = gql`
	mutation deleteBoard($boardId: ID!) {
		deleteBoard(boardId: $boardId)
	}
`;

const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			writer
			title
			password
			contents
		}
	}
`;

const MyRow = styled.div`
	display: flex;
`;

const MyColumn = styled.div`
	width: 25%;
`;
const ApolloCacheStatePage = () => {
	const { data } = useQuery(FETCH_BOARDS);
	const [deleteBoard] = useMutation(DELETE_BOARD);
	const [createBoard] = useMutation(CREATE_BOARD);

	const onClickDelete = (boardId: string) => async () => {
		await deleteBoard({
			variables: {
				boardId,
			},
			// refetchQueries: [{ query: FETCH_BOARDS }],
			update(cache, { data }) {
				cache.modify({
					fields: {
						fetchBoards: (prev, { readField }) => {
							const deletedId = data.deleteBoard;
							const filteredPrev = prev.filler((el: any) => readField("_id", el) !== deletedId);
							return [...filteredPrev];
						},
					},
				});
			},
		});
	};

	const onClickSubmit = async () => {
		await createBoard({
			variables: {
				createBoardInput: {
					writer: "철수영희",
					password: "1234",
					title: "철수와 영희",
					contents: "철수랑 영희 둘이 사겨?",
				},
			},
			// refetchQueries: [{ query: FETCH_BOARDS }],
			update(cache, { data }) {
				cache.modify({
					fields: {
						fetchBoards: (prev) => {
							return [...prev, data.createBoard, ...prev];
						},
					},
				});
			},
		});
	};

	return (
		<div>
			{data?.fetchBoards.map((el: any) => (
				<MyRow key={el._id}>
					<MyColumn>
						<input type="checkbox" />
					</MyColumn>
					<MyColumn>{el._id}</MyColumn>
					<MyColumn>{el.writer}</MyColumn>
					<MyColumn>{el.title}</MyColumn>
					<button onClick={onClickDelete(el._id)}>삭제하기</button>
				</MyRow>
			))}
			<button onClick={onClickSubmit}>게시글 등록</button>
		</div>
	);
};

export default ApolloCacheStatePage;
