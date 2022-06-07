import RecoilWriteUI from "./RecoilWrite.presenter";

const RecoilWrite = (props: any) => {
	// context를 통해 넘겨주면 매개변수 props 없어도됨
	return <RecoilWriteUI {...props} />;
};

export default RecoilWrite;
