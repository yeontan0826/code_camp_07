const EventLoopPage = () => {
	const onClickTimer = () => {
		// console.log("====== 시작!! ======");
		// setTimeout(() => {
		// 	console.log("onClickTimer");
		// }, 0);
		// console.log("====== 끄읕!! ======");
	};
	return (
		<div>
			<button onClick={onClickTimer}>setTimeout실행하기</button>
		</div>
	);
};

export default EventLoopPage;
