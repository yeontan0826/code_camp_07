import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = () => {
	const router = useRouter();

	useEffect(() => {
		if (!localStorage.getItem("accessToken")) {
			Modal.error({
				content: "로그인 후 서비스 이용이 가능합니다.",
				onOk() {
					router.push("/23-04-login-check");
				},
			});
		}
	}, []);
};
