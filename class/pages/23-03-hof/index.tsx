const HofPage = () => {
	const onClickButton = (num: number) => () => {
		return console.log(num);
	};
	return <button onClick={onClickButton(123)}>클릭</button>;
};

export default HofPage;
