import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			accessToken
		}
	}
`;

const LoginPage = () => {
	const [, setAccessToken] = useRecoilState(accessTokenState);
	const router = useRouter();

	const [loginUser] = useMutation(LOGIN_USER);
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
			const result = await loginUser({
				variables: { ...inputs },
			});
			setAccessToken(result.data?.loginUser.accessToken);
			Modal.success({
				content: "로그인 성공",
				onOk() {
					router.push("/quiz/22-02-login-success");
				},
			});
			console.log(result);
		} catch (error) {
			Modal.error({ content: "에러발생!!" });
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
