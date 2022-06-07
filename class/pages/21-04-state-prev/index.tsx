import { useState } from "react";

const StatePrevPage = () => {
	const [count, setCount] = useState(0);

	const counter = () => {
		// 1. 화살표 함수
		// setCount((prev) => prev + 1);

		// 2. 함수선언식
		// setCount(function (prev) {
		// 	// 로직 추가 가능
		// 	// if() 등
		// 	// for() 등
		// 	return prev + 1;
		// });

		// 3. 매개변수 바꿔보가
		setCount((askasdasfasfasf) => askasdasfasfasf + 1);
	};

	return (
		<div>
			<div>{count}</div>
			<button onClick={counter}>카운트 올리기!!</button>
		</div>
	);
};

export default StatePrevPage;
