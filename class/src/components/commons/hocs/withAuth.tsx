import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, isLoadedState, restoreAccessTokenLoadable } from "../../../commons/store";

// HOC(Higher Order Component)
// 먼저 실행되는 컴포넌트
export const withAuth = (Component) => (props) => {
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
	const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
	const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);

	const router = useRouter();
	useEffect(() => {
		// 해결방법 1번째 - restoreAccessToken을 두번 요청하기
		// if (!accessToken) {
		// 	getAccessToken().then((newAccessToken) => {
		// 		if (newAccessToken) {
		// 			setAccessToken(newAccessToken);
		// 		} else {
		// 			alert("로그인 후 이용이 가능합니다.");
		// 		}
		// 	});
		// }

		if (!localStorage.getItem("accessToken")) {
			Modal.error({
				content: " 로그인 후 이용이 가능합니다.",
				onOk() {
					router.push("/23-04-login-check");
				},
			});
		}
	}, []);

	// 해결방법 2번째 - 로딩 활용하기
	// useEffect(() => {
	// 	if (isLoaded && !accessToken) {
	// 		alert("로그인 후 이용이 가능합니다");
	// 	}
	// }, [isLoaded]);

	useEffect(() => {
		aaa.toPromise().then((newAccessToken) => {
			if (!newAccessToken) {
				alert("로그인 후 이용이 가능합니다.");
			}
		});
	}, []);

	return <Component {...props} />;
};
