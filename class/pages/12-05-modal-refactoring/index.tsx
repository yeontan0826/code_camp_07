import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const ModalAlertPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onToggleModal = () => {
        setIsModalVisible((prev) => !prev);
    };

    const handleComplete = (data: any) => {
        onToggleModal();
        console.log(data);
    };

    return (
        <>
            <Button type="primary" onClick={onToggleModal}>
                Open Modal
            </Button>
            {/* 모달 삭제하고 새로 만드는 방법 */}
            {isModalVisible && (
                <Modal
                    title={"우편번호"}
                    visible={true}
                    onOk={onToggleModal}
                    onCancel={onToggleModal}
                >
                    <DaumPostcode onComplete={handleComplete} />
                </Modal>
            )}

            {/* 모달 숨겼다가 나타나게 하는 방법
                <Modal title={"우편번호"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <DaumPostcode onComplete={handleComplete} />
                </Modal> */}
        </>
    );
};

export default ModalAlertPage;
