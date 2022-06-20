import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

/**
 * loginUser : 토큰 만료시간 1h
 * loginUserExample: 토큰 만료시간 5s (refreshToken 실습 목적)
 **/

const LOGIN_USER_EXAMPLE = gql`
	mutation loginUserExample($email: String!, $password: String!) {
		loginUserExample(email: $email, password: $password) {
			accessToken
		}
	}
`;

const LoginPage = () => {
	const [, setAccessToken] = useRecoilState(accessTokenState);
	const router = useRouter();

	const [loginUserExample] = useMutation(LOGIN_USER_EXAMPLE);
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[event.target.id]: event.target.value,
		});
	};

	const onClickLogin = async () => {
		try {
			const result = await loginUserExample({
				variables: { ...inputs },
			});
			setAccessToken(result.data.loginUserExample.accessToken);
			Modal.success({
				content: "로그인 성공",
				onOk() {
					router.push("/30-02-login-success");
				},
			});
			console.log(result);
		} catch (error: any) {
			Modal.error({
				title: "로그인 실패",
				content: error.message,
			});
		}
	};

	return (
		<div>
			<input id="email" placeholder="이메일을 입력해주세요" type={"email"} onChange={onChangeInputs} />
			<br />
			<input id="password" placeholder="비밀번호를 입력해주세요" type={"password"} onChange={onChangeInputs} />
			<br />
			<button onClick={onClickLogin}>로그인</button>
		</div>
	);
};

export default LoginPage;
