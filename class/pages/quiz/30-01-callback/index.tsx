import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const CallbackPage = () => {
	const [posts, setPosts] = useState([]);

	const onClickCallback = () => {
		const aaa = new XMLHttpRequest();
		aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
		aaa.send();
		aaa.addEventListener("load", (res: any) => {
			const num = res.target.response.split(" ")[0];
			const bbb = new XMLHttpRequest();
			bbb.open("get", `https://koreanjson.com/posts/${num}`);
			bbb.send();
			bbb.addEventListener("load", (res: any) => {
				const userId = JSON.parse(res.target.response).UserId;
				const ccc = new XMLHttpRequest();
				ccc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
				ccc.send();
				ccc.addEventListener("load", (res: any) => {
					setPosts(JSON.parse(res.target.response));
				});
			});
		});
	};

	const onClickPromise = () => {
		axios
			.get(`http://numbersapi.com/random?min=1&max=200`)
			.then((res) => {
				const num = res.data.split(" ")[0];
				return axios.get(`https://koreanjson.com/posts/${num}`);
			})
			.then((res) => {
				const userId = res.data.UserId;
				return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
			})
			.then((res) => {
				setPosts(res.data);
			});
	};

	const onClickAsyncAwait = async () => {
		const aaa = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
		const bbb = await axios.get(`https://koreanjson.com/posts/${JSON.parse(aaa.data.split(" ")[0])}`);
		const ccc = await axios.get(`https://koreanjson.com/posts?userId=${bbb.data.UserId}`);
		setPosts(ccc.data);
	};

	return (
		<div>
			결과:<button onClick={onClickCallback}>Callback</button>
			<br />
			결과:<button onClick={onClickPromise}>Promise</button>
			<br />
			결과:<button onClick={onClickAsyncAwait}>Async/Await</button>
			<br />
			<br />
			<DivColumn>
				{posts.map((el: any) => (
					<DivRow key={el.id}>
						<DivItemId>{el.id}</DivItemId>
						<DivTitle>{el.title}</DivTitle>
						<DivContent>{el.content}</DivContent>
					</DivRow>
				))}
			</DivColumn>
		</div>
	);
};

export default CallbackPage;

const DivColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const DivRow = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid gray;
	padding: 10px;
`;

const DivItemId = styled.div`
	display: flex;
	width: 5%;
	justify-content: center;
	align-items: center;
	font-weight: bold;
`;

const DivTitle = styled.div`
	width: 20%;
	padding: 0 10px;
	border-left: 1px solid gray;
`;

const DivContent = styled.div`
	width: 30%;
	padding: 0 10px;
	border-left: 1px solid gray;
`;
