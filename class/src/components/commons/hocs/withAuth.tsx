import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

// HOC(Higher Order Component)
// 먼저 실행되는 컴포넌트
export const withAuth = (Component) => (props) => {
	const router = useRouter();
	useEffect(() => {
		if (!localStorage.getItem("accessToken")) {
			Modal.error({
				content: " 로그인 후 이용이 가능합니다.",
				onOk() {
					router.push("/23-04-login-check");
				},
			});
		}
	}, []);

	return <Component {...props} />;
};
