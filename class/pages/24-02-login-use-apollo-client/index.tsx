import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../src/commons/store";

const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			accessToken
		}
	}
`;

const FETCH_USER_LOGGED_IN = gql`
	query fetchUserLoggedIn {
		fetchUserLoggedIn {
			_id
			email
			name
			createdAt
		}
	}
`;

const LoginPage = () => {
	const [, setAccessToken] = useRecoilState(accessTokenState);
	const [, setUserInfo] = useRecoilState(userInfoState);

	const router = useRouter();
	const [loginUser] = useMutation(LOGIN_USER);
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const client = useApolloClient();

	const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[event.target.id]: event.target.value,
		});
	};

	const onClickLogin = async () => {
		if (!inputs.email || !inputs.password) {
			Modal.error({
				content: "이메일과 비밀번호를 입력해주세요.",
			});
			return;
		}

		try {
			// 1. 로그인해서 토큰 받아오기
			const result = await loginUser({
				variables: { ...inputs },
			});

			const accessToken = result.data?.loginUser.accessToken; // 토큰 가져오기
			console.log(accessToken);

			// 2. 유저정보 가져오기
			const resultUserInfo = await client.query({
				query: FETCH_USER_LOGGED_IN,
				context: {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			});
			const userInfo = resultUserInfo.data.fetchUserLoggedIn;
			console.log(userInfo);

			// 3. 글로벌스테이트에 저장하기
			setAccessToken(accessToken);
			setUserInfo(userInfo);
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("userInfo", JSON.stringify(userInfo));

			// 4. 로그인 성공페이지로 이동하기
			Modal.success({
				content: "로그인 성공",
				onOk() {
					router.push("/24-03-login-use-apollo-client-success");
				},
			});
		} catch (error: any) {
			console.log(error.message);
			Modal.error({ content: "에러발생!!" });
		}
	};

	return (
		<div>
			<input id="email" type={"email"} placeholder={"이메일을 입력해주세요"} onChange={onChangeInputs} />
			<br />
			<input id="password" type={"password"} placeholder={"비밀번호를 입력해주세요"} onChange={onChangeInputs} />
			<br />
			<button onClick={onClickLogin}>로그인</button>
		</div>
	);
};

export default LoginPage;
