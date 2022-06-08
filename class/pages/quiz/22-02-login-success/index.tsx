import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

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

const LoginSuccessPage = () => {
	const router = useRouter();

	const [accessToken] = useRecoilState(accessTokenState);
	if (!accessToken) {
		Modal.error({
			content: `토큰이 없습니다.\n다시 로그인해주세요.`,
			onOk() {
				router.back();
			},
		});
	}

	const { data } = useQuery(FETCH_USER_LOGGED_IN);

	return (
		<div>
			<h1>로그인 성공!!</h1>
			<p>{data?.fetchUserLoggedIn.name}님 환영합니다!!</p>
		</div>
	);
};

export default LoginSuccessPage;
