import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";

const FETCH_BOARDS = gql`
	query fetchBoards {
		fetchBoards {
			_id
			writer
			title
		}
	}
`;

const BasketPage = () => {
	const { data } = useQuery(FETCH_BOARDS);

	const onClickBasket = (el) => () => {
		// 1. 기존 장바구니 가져오기
		const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

		// 2. 이미 담겼는데 확인하기
		const temp = baskets.filter((basketEl) => basketEl._id === el._id);
		if (temp.length > 0) {
			Modal.warning({
				content: "이미 담으신 물품입니다.",
			});
			return;
		}

		// 3. 장바구니에 담기
		const { __typename, ...productInfo } = el; // '__typename' 키값을 제거를 위해 구조분해할당 사용
		baskets.push(productInfo);
		localStorage.setItem("baskets", JSON.stringify(baskets));
	};

	return (
		<div>
			{data?.fetchBoards.map((el) => (
				<MyRow key={el._id}>
					<MyColumn>{el._id}</MyColumn>
					<MyColumn>{el.writer}</MyColumn>
					<MyColumn>{el.title}</MyColumn>
					<button onClick={onClickBasket(el)}>장바구니 담기</button>
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
