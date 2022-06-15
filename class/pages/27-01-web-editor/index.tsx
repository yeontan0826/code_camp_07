// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// ReactQuill import를 하되 ssr(Server Side Rendering ㅏㅎ래데는 ㅏ=ㅇ씀1)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WebEditorPage = () => {
	const onChangeContents = (value: string) => {
		console.log(value);
	};
	const onClickQQQ = () => {
		const AAA = dynamic(() => AAA("ㅁㅁㅁ"));
	};

	return (
		<div>
			작성자: <input type={"text"} />
			<br />
			비밀번호: <input type={"password"} />
			<br />
			제목: <input type={"text"} />
			<br />
			내용: <ReactQuill onChange={onChangeContents} />
			<br />
			<button>등록하기</button>
		</div>
	);
};

export default WebEditorPage;
