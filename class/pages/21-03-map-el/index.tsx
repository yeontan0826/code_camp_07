const MapElPage = () => {
	// 1. 기본방법
	// ["철수", "영희", "훈이"].forEach((el, index) => {
	// 	console.log(el, index);
	// });

	// // 2. 매개변수 변경한 방법
	// ["철수", "영희", "훈이"].forEach((asd, qweqw) => {
	// 	console.log(asd, qweqw);
	// });

	// // 3. 함수선언식 방법
	// ["철수", "영희", "훈이"].forEach(function (aaa, bbb) {
	// 	console.log(aaa, bbb);
	// });

	// 4. el과 index 바꾸기

	["철수", "영희", "훈이"].forEach((el, index) => console.log(el, index));

	return <></>;
};

export default MapElPage;
