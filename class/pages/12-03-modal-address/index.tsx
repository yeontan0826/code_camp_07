import { Modal, Button } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

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

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        console.log(data);
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            {/* 모달 삭제하고 새로 만드는 방법 */}
            {isModalVisible && (
                <Modal
                    title={"우편번호"}
                    visible={true}
                    onOk={handleOk}
                    onCancel={handleCancel}
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
