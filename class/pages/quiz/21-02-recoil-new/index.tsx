import { useContext } from "react";
import { GlobalContext } from "../../../src/quiz/21-02-recoil/commons/store";
import RecoilWrite from "../../../src/quiz/21-02-recoil/components/units/recoil/RecoilWrite.container";

const RecoilNewPage = () => {
	// props로 넘겨줌
	// return <RecoilWrite isEdit={false} />;

	// context를 이용
	const { setIsEdit } = useContext(GlobalContext);
	setIsEdit(false);
	return <RecoilWrite />;
};

export default RecoilNewPage;
