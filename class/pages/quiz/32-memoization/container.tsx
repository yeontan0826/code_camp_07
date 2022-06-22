import { useCallback, useState, useMemo } from "react";
import MemoizationPresenterPage from "./presenter";

const MemoizationContainerPage = () => {
	console.log("Container Rendered!!");

	const [countState, setCountState] = useState(0);
	// const onChangeState = () => {
	// 	console.log(countState + 1);
	// 	setCountState((prev) => prev + 1);
	// };

	// const onChangeState = useCallback(() => {
	// 	console.log(countState + 1);
	// 	setCountState((prev) => prev + 1);
	// }, []);

	const onChangeState = useMemo(
		() => () => {
			console.log(countState + 1);
			setCountState((prev) => prev + 1);
		},
		[]
	);

	// let countLet = 0;
	let countLet = useMemo(() => 0, []);
	// const onChangeLet = () => {
	// 	console.log(countLet + 1);
	// 	countLet += 1;
	// };
	const onChangeLet = useCallback(() => {
		console.log(countLet + 1);
		countLet += 1;
	}, []);

	return (
		<div>
			<div>{countState}</div>
			<button onClick={onChangeState}>state 카운트 증가</button>
			<button
				onClick={() => {
					setCountState((prev) => prev + 1);
				}}
			>
				JSX state 카운트 증가
			</button>
			<br />
			---------------
			<div>{countLet}</div>
			<button onClick={onChangeLet}>Let 카운트 증가</button>
			<MemoizationPresenterPage />
		</div>
	);
};

export default MemoizationContainerPage;
