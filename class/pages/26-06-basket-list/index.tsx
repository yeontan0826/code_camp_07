import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface IBasketItems {
	_id: string;
	writer: string;
	title: string;
}

const BasketPage = () => {
	const [basketItems, setBasketItems] = useState<IBasketItems[]>([]);

	useEffect(() => {
		const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
		setBasketItems(baskets);
	}, []);

	return (
		<div>
			{basketItems.map((el) => (
				<MyRow key={el._id}>
					<MyColumn>{el._id}</MyColumn>
					<MyColumn>{el.writer}</MyColumn>
					<MyColumn>{el.title}</MyColumn>
				</MyRow>
			))}
		</div>
	);
};

export default BasketPage;

/* Styled */
const MyRow = styled.div`
	display: flex;
`;

const MyColumn = styled.div`
	width: 25%;
`;
