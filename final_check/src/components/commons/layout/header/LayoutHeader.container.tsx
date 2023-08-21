import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store/States";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";

const LayoutHeader = () => {
    const { onMoveToPage } = useMoveToPage();

    const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);
    const [logoutUser] = useMutation(LOGOUT_USER);

    const [, setAccessToken] = useRecoilState(accessTokenState);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onModalToggle = () => {
        setIsModalVisible((prev) => !prev);
    };

    const onClickLogout = async () => {
        try {
            await logoutUser();

            localStorage.removeItem("accessToken");
            setAccessToken("");

            Modal.success({
                content: "로그아웃 성공했습니다",
                onOk() {
                    onMoveToPage(`/`)();
                },
                onCancel() {
                    onMoveToPage(`/`)();
                },
            });
        } catch (error: any) {
            Modal.error({
                title: "로그아웃 실패",
                content: error.message,
            });
        }
    };

    return <LayoutHeaderUI data={data} refetch={refetch} onClickLogout={onClickLogout} isModalVisible={isModalVisible} onModalToggle={onModalToggle} />;
};

export default LayoutHeader;
