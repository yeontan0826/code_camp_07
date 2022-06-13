import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export const useMoveToPage = () => {
	const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

	const router = useRouter();

	const onClickMoveToPage = (path: any) => () => {
		router.push(path);
		setVisitedPage(path);
	};

	return {
		visitedPage,
		onClickMoveToPage,
	};
};
