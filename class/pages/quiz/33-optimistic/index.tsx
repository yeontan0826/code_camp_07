import { gql, useMutation, useQuery } from "@apollo/client";

// 좋아요 갯수 가지고 오는 api _ 게시글 조회 api에서 좋아요 갯수만 뽑아 옵니다.
const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			_id
			likeCount
		}
	}
`;

// 좋아요 카운트 올리는 api
const LIKE_BOARD = gql`
	mutation likeBoard($boardId: ID!) {
		likeBoard(boardId: $boardId)
	}
`;

const OptimisticPage = () => {
	const [likeBoard] = useMutation(LIKE_BOARD);
	const { data } = useQuery(FETCH_BOARD, {
		variables: { boardId: "62b3c47703610b00299904ff" },
	});

	const onClickLike = () => {
		likeBoard({
			variables: {
				boardId: "62b3c47703610b00299904ff",
			},

			optimisticResponse: {
				likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
			},

			update(cache, { data }) {
				cache.writeQuery({
					query: FETCH_BOARD,
					variables: { boardId: "62b3c47703610b00299904ff" },
					data: {
						fetchBoard: {
							_id: "62b3c47703610b00299904ff",
							__typename: "Board",
							likeCount: data?.likeBoard,
						},
					},
				});
			},
		});
	};

	return (
		<div>
			<div>현재카운트: {data?.fetchBoard.likeCount}</div>
			<button onClick={onClickLike}>좋아요 1추가</button>
		</div>
	);
};

export default OptimisticPage;
