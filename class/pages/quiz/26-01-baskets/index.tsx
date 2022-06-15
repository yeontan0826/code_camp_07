import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

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

interface IBasketItem {
	__typename: string;
	_id: string;
	writer: string;
	title: string;
	contents: string;
}

const BasketsPage = () => {
	const { data } = useQuery(FETCH_BOARDS);
	const [basketsIds, setBasketsIds] = useState([]);

	// 최초 1회 실행
	useEffect(() => {
		const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
		setBasketsIds(baskets);
	}, []);

	const onClickItem = (el: IBasketItem) => () => {
		const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
		const temp = baskets.filter((basketEl: IBasketItem) => basketEl._id === el._id);

		if (temp.length > 0) {
			// 존재함
			const newBaskets = baskets.filter((basketEl: IBasketItem) => basketEl._id !== el._id);
			localStorage.setItem("baskets", JSON.stringify(newBaskets));
			setBasketsIds(newBaskets);
		} else {
			// 존재하지 않음
			const { __typename, ...productInfo } = el;
			baskets.push(productInfo);
			localStorage.setItem("baskets", JSON.stringify(baskets));
			setBasketsIds(baskets);
		}
	};

	const isExist = (el: IBasketItem): boolean => {
		console.log("aa");
		const temp = basketsIds.filter((basketEl: IBasketItem) => basketEl._id === el._id);
		return temp.length > 0;
	};

	return (
		<div>
			<MyColumn>
				{data?.fetchBoards.map((el: IBasketItem) => (
					<MyRow key={el._id}>
						<MyItem>{el.writer}</MyItem>
						<MyItem>{el.title}</MyItem>
						<MyItem>{el.contents}</MyItem>
						<button onClick={onClickItem(el)}>{isExist(el) ? "담기취소" : "게시물담기"}</button>
					</MyRow>
				))}
			</MyColumn>
		</div>
	);
};

export default BasketsPage;

const MyColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const MyRow = styled.div`
	display: flex;
`;

const MyItem = styled.div`
	width: 20%;
`;
