import { Modal } from "antd";
import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../../commons/store/States";
import { useMoveToPage } from "../hooks/useMoveToPage";

const withAuth = (Component: any) => (props: any) => {
    // const [accessToken] = useRecoilState(accessTokenState);
    const { onMoveToPage } = useMoveToPage();

    useEffect(() => {
        // if (!accessToken) {	// recoilState 변경으로 랜더링이 한번 더 되어서 Modal이 2번 실행됨.
        if (!localStorage.getItem("accessToken")) {
            Modal.error({
                content: "로그인 후 이용가능합니다.",
                onOk() {
                    onMoveToPage("/login")();
                },
                onCancel() {
                    onMoveToPage("/login")();
                },
            });
        }
    }, []);

    return <Component {...props} />;
};

export default withAuth;
