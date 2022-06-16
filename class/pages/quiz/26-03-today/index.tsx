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

const TodayPage = () => {
	const { data } = useQuery(FETCH_BOARDS);
	const [recentProducts, setRecentProducts] = useState([]);

	useEffect(() => {
		const products = JSON.parse(localStorage.getItem("recentProducts") || "[]");
		setRecentProducts(products);
	}, []);

	const getDate = (value: Date) => {
		const date = new Date(value);
		const yyyy = date.getFullYear();
		const mm = String(date.getMonth() + 1).padStart(2, "0");
		const dd = String(date.getDate()).padStart(2, "0");
		return `${yyyy}-${mm}-${dd}`;
	};

	const onClickToSaveBoard = (el: any) => () => {
		const products = JSON.parse(localStorage.getItem("products") || "[]");
		// const temp = products.filter((productEl: any) => productEl.)

		const { __typename, ...productInfo } = el;
		const product = {
			[getDate(new Date())]: productInfo,
		};

		products.push(product);
		localStorage.setItem("recentProducts", JSON.stringify(products));
		setRecentProducts(products);
	};

	return (
		<Wrapper>
			<MyColumn>
				{data?.fetchBoards.map((el: any) => (
					<MyRow key={el._id} onClick={onClickToSaveBoard(el)}>
						<MyItem>{el.writer}</MyItem>
						<MyItem>{el.title}</MyItem>
						<MyItem>{el.contents}</MyItem>
					</MyRow>
				))}
			</MyColumn>
			{recentProducts.length === 0 ? (
				<div style={{ marginLeft: "50px" }}>최근에 본 상품이 없습니다.</div>
			) : (
				<MyColumn style={{ marginLeft: "50px" }}>
					{recentProducts.map((el: any) => (
						<MyRow key={Object.values(el)}>
							<MyItem>{Object.values(recentProducts[0])}</MyItem>
							<MyItem>{Object.values(recentProducts[0])}</MyItem>
							<MyItem>{Object.values(recentProducts[0])}</MyItem>
						</MyRow>
					))}
				</MyColumn>
			)}
		</Wrapper>
	);
};

export default TodayPage;

const Wrapper = styled.div`
	margin: auto;
	display: flex;
`;

const MyColumn = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
	border: 1px solid black;
`;

const MyRow = styled.div`
	display: flex;
	cursor: pointer;
	:hover {
		background-color: #f4d6f4;
	}
`;

const MyItem = styled.div`
	width: 100%;
	height: 40px;
	padding: 0 10px;
	line-height: 40px;
`;
