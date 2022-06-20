import { ApolloClient, ApolloLink, ApolloProvider, gql, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const ApolloSetting = (props: any) => {
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

	// 1. 프리렌더링 예제 - process.browser 방법
	// if (process.browser) {
	// 	console.log("지금은 브라우저다!!!");
	// 	localStorage.getItem("accessToken");
	// } else {
	// 	console.log("지금은 프론트엔드 서버다!! yarn dev 프로그램이다!!");
	// 	localStorage.getItem("accessToken");
	// }

	// 2. 프리렌더링 예제 - typeof window 방법
	// if (typeof window !== "undefined") {
	// 	console.log("지금은 브라우저다!!!");
	// 	localStorage.getItem("accessToken");
	// } else {
	// 	console.log("지금은 프론트엔드 서버다!! yarn dev 프로그램이다!!");
	// 	localStorage.getItem("accessToken");
	// }

	// 3. 프리렌더링 예제 - useEffect 방법
	useEffect(() => {
		// 1. 기존 방식
		// 로컬 스토리지에서 가져오기
		// console.log("지금은 브라우저다!!");
		// const accessToken = localStorage.getItem("accessToken");
		// setAccessToken(accessToken || "");

		// 2. 새로운 방식
		// 파일을 분리하여 토큰을 새로 가져옴 & 쿠키 스토리지
		getAccessToken().then((newAccessToken) => {
			setAccessToken(newAccessToken);
		});
	}, []);

	// graphQLErrors: graphQL 에러들
	// operation: 실패했던 쿼리의 정보가 담긴 변수
	// forward: 전송하기
	const errorLink = onError(({ graphQLErrors, operation, forward }) => {
		// 1-1. 에러를 캐치
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				// 1-2. 해당 에러가 토큰 만료 에러인지 확인(UNAUTHENTICATED)
				if (err.extensions.code === "UNAUTHENTICATED") {
					// 2-1. refreshToken으로 accessToken을 재발급 받기
					getAccessToken().then((newAccessToken) => {
						// 2-2. 재발급 받은 accessToken 저장하기
						setAccessToken(newAccessToken);

						// 3-1. 재발급 받은 accessToken으로 방금 실패한 query 재요청하기
						// setContext: 정보를 바꿀때
						operation.setContext({
							headers: {
								...operation.getContext().headers, // 기존 헤더는 유지한채로
								Authorization: `Bearer ${newAccessToken}`, // 새로 받은 토큰값만 변경해준다
							},
						});

						// getContext: 정보를 가져올때
						// operation.getContext({});

						// getContext().header: 헤더 정보를 가져올때
						// operation.getContext().headers;

						// 3-2. 변경된 operation 재요청하기
						return forward(operation);
					});
				}
			}
		}
	});

	const uploadLink = createUploadLink({
		uri: "https://backend07.codebootcamp.co.kr/graphql",
		headers: { Authorization: `Bearer ${accessToken}` },
		credentials: "include",
	});

	const client = new ApolloClient({
		link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
		cache: new InMemoryCache(),
		connectToDevTools: true,
	});

	return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
