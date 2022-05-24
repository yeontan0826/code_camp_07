import { Modal, Button } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const ModalAlertPage = () => {
    const router = useRouter();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [password, setPassword] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title={"비밀번호"}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <input
                    type={"password"}
                    onChange={onChangePassword}
                    placeholder={"비밀번호를 입력해주세요"}
                />
            </Modal>
        </>
    );
};

export default ModalAlertPage;
