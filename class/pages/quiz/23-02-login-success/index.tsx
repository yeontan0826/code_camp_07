import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../src/quiz/23-01-hoc/components/commons/hocs/withAuth";

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
		<div style={{ margin: "50px", fontSize: "30px" }}>
			<h3>로그인 성공</h3>
			<p>{data?.fetchUserLoggedIn.name}님 환영합니다!!</p>
		</div>
	);
};

export default withAuth(LoginSuccessPage);
