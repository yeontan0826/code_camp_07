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

const ReactQuillDetailPage = () => {
	const router = useRouter();
	const { data } = useQuery(FETCH_BOARD, {
		variables: {
			boardId: router.query.id,
		},
	});

	return (
		<div>
			<div>{data?.fetchBoard.writer}</div>
			<div>{data?.fetchBoard.title}</div>
			{typeof window !== "undefined" ? (
				<div
					dangerouslySetInnerHTML={{
						__html: Dompurify.sanitize(data?.fetchBoard.contents),
					}}
				/>
			) : (
				<div />
			)}
		</div>
	);
};

export default ReactQuillDetailPage;
