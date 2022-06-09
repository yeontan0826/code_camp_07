import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

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
		if (!inputs.email || !inputs.password) {
			Modal.error({
				content: "이메일과 비밀번호를 입력해주세요.",
			});
			return;
		}

		try {
			const result = await loginUser({
				variables: { ...inputs },
			});

			const accessToken = result.data?.loginUser.accessToken; // 토큰 가져오기
			setAccessToken(accessToken);

			localStorage.setItem("accessToken", accessToken);

			Modal.success({
				content: "로그인 성공",
				onOk() {
					router.push("/23-02-login-localstorage-success");
				},
			});
		} catch (error) {
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
