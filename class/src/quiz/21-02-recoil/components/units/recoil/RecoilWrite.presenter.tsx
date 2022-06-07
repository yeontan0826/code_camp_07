import { useContext } from "react";
import { GlobalContext } from "../../../commons/store";

const RecoilWriteUI = (props: any) => {
	const { isEdit } = useContext(GlobalContext);

	return (
		// props로 isEdit을 받아옴
		// <div>
		// 	<h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
		// </div>

		// context를 통해 받아옴
		<div>
			<h1>{isEdit ? "수정하기" : "등록하기"}</h1>
		</div>
	);
};

export default RecoilWriteUI;
