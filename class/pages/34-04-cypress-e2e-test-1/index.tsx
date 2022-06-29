import { useRouter } from "next/router";

const CypressE2ETestPage1 = () => {
	const router = useRouter();

	const onClickButton = () => {
		router.push("/34-05-cypress-e2e-test-2");
	};

	return <button>철수랑 놀러가기</button>;
};

export default CypressE2ETestPage1;
