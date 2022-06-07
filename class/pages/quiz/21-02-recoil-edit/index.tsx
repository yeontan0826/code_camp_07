import { useContext } from "react";
import { GlobalContext } from "../../../src/quiz/21-02-recoil/commons/store";
import RecoilWrite from "../../../src/quiz/21-02-recoil/components/units/recoil/RecoilWrite.container";

const RecoilEditPage = () => {
	// props를 넘겨줌
	// return <RecoilWrite isEdit={true} />;

	// context를 이용
	const { setIsEdit } = useContext(GlobalContext);
	setIsEdit(true);
	return <RecoilWrite />;
};

export default RecoilEditPage;
