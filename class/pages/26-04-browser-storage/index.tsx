import { Button } from "antd";

const BrowserStoragePage = () => {
	// 쿠키에 저장
	const onClickSaveCookie = () => {
		document.cookie = "aaa=철수";
		document.cookie = "zzz=맹구";
	};
	// 로컬에 저장
	const onClickSaveLocal = () => {
		localStorage.setItem("bbb", "영회");
	};
	// 세션에 저장
	const onClickSaveSession = () => {
		sessionStorage.setItem("ccc", "훈이");
	};

	// 쿠키에서 불러오기
	const onClickLoadCookie = () => {
		console.log(document.cookie);
		const myCookie = document.cookie.split("; ").filter((el) => el.startsWith("aaa="));
		console.log(myCookie);
	};
	// 로컬에서 불러오기
	const onClickLoadLocal = () => {
		const bbb = localStorage.getItem("bbb");
		console.log(`로컬 조회 결과: ${bbb}`);
	};
	// 세션에서 불러오기
	const onClickLoadSession = () => {
		const ccc = sessionStorage.getItem("ccc");
		console.log(`세션 조회 결과: ${ccc}`);
	};

	return (
		<div>
			<Button onClick={onClickSaveCookie}>쿠키 저장</Button>
			<Button onClick={onClickSaveLocal}>로컬 저장</Button>
			<Button onClick={onClickSaveSession}>세션 저장</Button>
			<br />
			=============================
			<br />
			<Button onClick={onClickLoadCookie}>쿠키 조회</Button>
			<Button onClick={onClickLoadLocal}>로컬 조회</Button>
			<Button onClick={onClickLoadSession}>세션 조회</Button>
		</div>
	);
};

export default BrowserStoragePage;
