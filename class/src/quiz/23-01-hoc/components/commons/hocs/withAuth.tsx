import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
	const router = useRouter();
	useEffect(() => {
		if (!localStorage.getItem("accessToken")) {
			Modal.error({
				content: "로그인 후 이용이 가능합니다.\n로그인 화면으로 이동합니다.",
				onOk() {
					router.push("/quiz/23-01-login");
				},
			});
		}
	}, []);

	return <Component {...props} />;
};
