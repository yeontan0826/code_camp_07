import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

const FETCH_BOARDS = gql`
	query fetchBoards($search: String, $page: Int) {
		fetchBoards(search: $search, page: $page) {
			_id
			writer
			title
			contents
		}
	}
`;

const MyRow = styled.div`
	display: flex;
`;

const MyColumn = styled.div`
	width: 200px;
`;

const PageNum = styled.span`
	padding: 0 4px;
	margin: 0 3px;
	text-align: center;
	border: 1px solid black;
	cursor: pointer;
`;

export default function MapBoardPage() {
	const { data, refetch } = useQuery(FETCH_BOARDS);
	const [search, setSearch] = useState("");

	const onClickPage = (event: any) => {
		refetch({ page: Number(event.target.id) });
	};

	const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const onClickSearch = () => {
		refetch({ search, page: 1 });
	};

	return (
		<>
			<div>
				<input placeholder="검색어를 입력해주세요" type={"text"} onChange={onChangeSearch} />
				<button onClick={onClickSearch}>검색하기</button>
				{data?.fetchBoards.map((el: any) => (
					<MyRow key={el._id}>
						<MyColumn>{el.writer}</MyColumn>
						<MyColumn>{el.title}</MyColumn>
					</MyRow>
				))}
				{new Array(10).fill(1).map((_, index) => (
					<PageNum key={index + 1} id={String(index + 1)} onClick={onClickPage}>
						{" "}
						{index + 1}{" "}
					</PageNum>
				))}
			</div>
		</>
	);
}
