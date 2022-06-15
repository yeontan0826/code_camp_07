import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!) {
		fetchBoard(boardId: $boardId) {
			_id
			writer
			title
			contents
		}
	}
`;

const WebEditorDetailPage = () => {
	const router = useRouter();
	const { data } = useQuery(FETCH_BOARD, {
		variables: {
			boardId: router.query.id,
		},
	});

	return (
		<div>
			<div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
			<div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
			{/* <div>{data?.fetchBoard.contents}</div> */}
			{typeof window !== "undefined" ? (
				<div
					style={{ color: "blue" }}
					dangerouslySetInnerHTML={{
						__html: Dompurify.sanitize(data?.fetchBoard.contents),
					}}
				></div>
			) : (
				<div style={{ color: "blue" }} />
			)}
			<div style={{ color: "brown" }}>상품가격: </div>
		</div>
	);
};

export default WebEditorDetailPage;
