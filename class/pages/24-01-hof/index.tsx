export default function HofPage() {
	const onClickMove = (boardId: string) => () => {
		// router.push(`/${boardId}`);
		console.log(boardId);
	};

	return (
		<div>
			<h1>HOF 연습 페이지입니다.</h1>
			{[
				{
					id: "1",
					title: "안녕하세요",
					writer: "철수",
					contents: "반갑습니다.",
				},
				{
					id: "2",
					title: "오늘의 날씨는",
					writer: "영희",
					contents: "좋습니다.",
				},
				{ id: "3", title: "배고파요", writer: "훈이", contents: "ㅠㅠ" },
			].map((el) => (
				<div key={el.id} onClick={onClickMove(el.id)}>
					{el.title} {el.writer}
				</div>
			))}
		</div>
	);
}
