import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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

const NumColumn = styled.span`
	width: 50px;
	font-weight: bold;
`;

const MyColumn = styled.div`
	width: 200px;
`;

const Word = styled.span`
	color: ${(props: { isMatched: boolean }) => (props.isMatched ? "red" : "black")};
`;

const PageNum = styled.span`
	padding: 0 4px;
	margin: 0 3px;
	text-align: center;
	border: 1px solid black;
	cursor: pointer;
`;

export default function MapBoardPage() {
	const [keyword, setKeyword] = useState("");
	const { data, refetch } = useQuery(FETCH_BOARDS);

	const onClickPage = (event: any) => {
		refetch({ page: Number(event.target.id) });
	};

	const getDebounce = _.debounce((data) => {
		refetch({ search: data, page: 1 });
		setKeyword(data);
	}, 500);

	const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		// refetch({ search: event.target.value, page: 1 });
		getDebounce(event.target.value);
	};

	return (
		<>
			<div>
				<input placeholder="검색어를 입력해주세요" type={"text"} onChange={onChangeSearch} />
				{data?.fetchBoards.map((el: any, index: number) => (
					<MyRow key={el._id}>
						<NumColumn>{index + 1}</NumColumn>
						<MyColumn>{el.writer}</MyColumn>
						<MyColumn>
							{el.title
								.replaceAll(keyword, `#$%${keyword}#$%`)
								.split("#$%")
								.map((el: any) => (
									<Word key={uuidv4()} isMatched={keyword === el}>
										{el}
									</Word>
								))}
						</MyColumn>
						<MyColumn>{el.contents}</MyColumn>
					</MyRow>
				))}
				{new Array(10).fill(1).map((_, index) => (
					<PageNum key={index + 1} id={String(index + 1)} onClick={onClickPage}>
						{index + 1}
					</PageNum>
				))}
			</div>
		</>
	);
}
