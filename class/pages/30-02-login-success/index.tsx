import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

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
	// console.log(accessToken);
	const [accessToken] = useRecoilState(accessTokenState);
	console.log(accessToken);

	const { data } = useQuery(FETCH_USER_LOGGED_IN);

	return (
		<div>
			<h1>로그인 성공!!</h1>
			<p>{data?.fetchUserLoggedIn.name}님 환영합니다!!</p>
		</div>
	);
};

export default LoginSuccessPage;
