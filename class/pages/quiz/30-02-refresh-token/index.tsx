import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const LOGIN_USER_EXAMPLE = gql`
	mutation loginUserExample($email: String!, $password: String!) {
		loginUserExample(email: $email, password: $password) {
			accessToken
		}
	}
`;

const RefreshTokenPage = () => {
	const router = useRouter();
	const [, setAccessToken] = useRecoilState(accessTokenState);
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
					router.push("/quiz/30-03-refresh-token-success");
				},
			});
			console.log(result.data.loginUserExample.accessToken);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<input id={"email"} type={"text"} placeholder={"이메일"} onChange={onChangeInputs} />
			<input id={"password"} type={"password"} placeholder={"비밀번호"} onChange={onChangeInputs} />
			<button onClick={onClickLogin}>로그인</button>
		</div>
	);
};

export default RefreshTokenPage;
