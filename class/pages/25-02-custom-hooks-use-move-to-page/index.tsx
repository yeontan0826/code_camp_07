import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

const CustomHooksUseMoveToPage = () => {
	const { onClickMoveToPage } = useMoveToPage();

	return (
		<div>
			<button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
			<button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
			<button onClick={onClickMoveToPage("/mypages")}>마이페이지로 이동</button>
		</div>
	);
};

export default CustomHooksUseMoveToPage;
