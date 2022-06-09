import { gql, useQuery } from "@apollo/client";

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
	const { data } = useQuery(FETCH_USER_LOGGED_IN);
	return (
		<div>
			<h3>로그인 성공!!!</h3>
			<p>{data?.fetchUserLoggedIn.name}님 환영합니다!</p>
		</div>
	);
};

export default LoginSuccessPage;
