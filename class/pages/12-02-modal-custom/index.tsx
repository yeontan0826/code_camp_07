import { Modal, Button } from "antd";
import { useState } from "react";

const ModalAlertPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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
                    placeholder={"비밀번호를 입력해주세요"}
                />
            </Modal>
        </>
    );
};

export default ModalAlertPage;
