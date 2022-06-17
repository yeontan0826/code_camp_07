import axios from "axios";

const CallbackPromiseAsyncAwaitPage = () => {
	const onClickCallback = () => {
		const aaa = new XMLHttpRequest();
		aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
		aaa.send();
		aaa.addEventListener("load", (res: any) => {
			const num = res.target.response.split(" ")[0];

			const bbb = new XMLHttpRequest();
			bbb.open("get", `http://koreanjson.com/posts/${num}`);
			bbb.send();
			bbb.addEventListener("load", (res: any) => {
				const userId = JSON.parse(res.target.response).UserId;

				const ccc = new XMLHttpRequest();
				ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
				ccc.send();
				ccc.addEventListener("load", (res: any) => {
					console.log(JSON.parse(res.target.response));
				});
			});
		});
	};

	// const myAxios = () => {
	// 	return new Promise((resolve, reject) => {
	// 		// 오래걸리는 작업(외부 API 요청 등)

	// 		// 성공시
	// 		resolve("철수");

	// 		// 실패시
	// 		// reject("에러발생!! ");
	// 	});
	// };

	// 비동기
	const onClickPromise = () => {
		axios
			.get("http://numbersapi.com/random?min=1&max=200")
			.then((res) => {
				const num = res.data.split(" ")[0];
				return axios.get(`http://koreanjson.com/posts/${num}`);
			})
			.then((res) => {
				const userId = res.data.UserId;
				return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
			})
			.then((res) => {
				console.log(res.data);
			});
	};

	// 동기
	const onClickAsyncAwait = async () => {
		const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");

		const bbb = await axios.get(`http://koreanjson.com/posts/${JSON.parse(aaa.data.split(" ")[0])}`);

		const ccc = await axios.get(`http://koreanjson.com/posts?userId=${bbb.data.UserId}`);

		console.log(ccc.data);
	};

	return (
		<div>
			<button onClick={onClickCallback}>Callback 요청</button>
			<button onClick={onClickPromise}>Promise 요청</button>
			<button onClick={onClickAsyncAwait}>Async/Await 요청</button>
		</div>
	);
};

export default CallbackPromiseAsyncAwaitPage;
