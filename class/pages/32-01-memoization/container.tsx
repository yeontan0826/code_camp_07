import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

const MemoizationContainerPage = () => {
	console.log("Rendered Container Page");

	let countLet = 0;
	const onClickCountLet = useCallback(() => {
		console.log(countLet + 1);
		countLet += 1;
	}, []);

	const aaa = useMemo(() => Math.random(), []);
	console.log(aaa);

	const [countState, setCountState] = useState(0);
	// const onClickCountState = useCallback(() => {
	// 	console.log(countState + 1);
	// 	setCountState((prev) => prev + 1);
	// }, []);

	// useCallback뿐만아니라 useMemo를 써서 함수를 값으로 인식할 수 있다.
	const onClickCountState = useMemo(
		() => () => {
			console.log(countState + 1);
			setCountState((prev) => prev + 1);
		},
		[]
	);

	return (
		<div>
			<div>==================================</div>
			<h1>이것은 Container 입니다.</h1>
			<div>let 카운트: {countLet}</div>
			<button onClick={onClickCountLet}>let 카운트 증가</button>
			<br />
			<div>state 카운트: {countState}</div>
			<button onClick={onClickCountState}>state 카운트 증가</button>
			<div>==================================</div>
			<MemoizationPresenterPage countState={countState} />
		</div>
	);
};

export default MemoizationContainerPage;
