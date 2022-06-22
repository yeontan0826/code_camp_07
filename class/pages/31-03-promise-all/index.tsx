const PromiseAllPage = () => {
	const onClickPromise = async () => {
		performance.now();
		console.time("시작!!");
		const result1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("https://dog1.jpg");
			}, 3000);
		});

		const result2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("https://dog1.jpg");
			}, 3000);
		});
		const result3 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("https://dog1.jpg");
			}, 3000);
		});
		console.timeEnd("시작!!");
	};

	const onClickPromiseAll = async () => {
		console.time("시작!!");
		// 동시에 3개 요청
		// 주의!! 각각 await붙이면 안됨
		const result = await Promise.all([
			new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("https://dog1.jpg");
				}, 3000);
			}),

			new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("https://dog1.jpg");
				}, 3000);
			}),
			new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("https://dog1.jpg");
				}, 3000);
			}),
		]);

		console.log(result);

		// const result1 = new Promise((resolve, reject) => {
		//     setTimeout(() => {
		//         resolve("https://dog1.jpg");
		//     }, 3000);
		// });

		// const result2 = new Promise((resolve, reject) => {
		//     setTimeout(() => {
		//         resolve("https://dog1.jpg");
		//     }, 3000);
		// });
		// const result3 = new Promise((resolve, reject) => {
		//     setTimeout(() => {
		//         resolve("https://dog1.jpg");
		//     }, 3000);
		// });

		console.timeEnd("시작!!");
	};

	return (
		<div>
			<button onClick={onClickPromise}>Promise 연습하기!!</button>
			<button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
		</div>
	);
};

export default PromiseAllPage;
