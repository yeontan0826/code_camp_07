import { Modal } from "antd";
import { useState } from "react"
import DaumPostcode from "react-daum-postcode";

const ModalAddressPage = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [address, setAddress] = useState("")

    const onToggleModal = () => {
        setIsModalVisible((prev) => !prev);
    };  

    const handleComplete = (data: any) => {
        onToggleModal();
        setAddress(data.address)
        console.log(data);
    };

    return(
        <>
        <button onClick={onToggleModal}>모달열기</button>
        {address && address }
        {isModalVisible && (
            <Modal
                title={"우편번호"}
                visible={true}
                onOk={onToggleModal}
                onCancel={onToggleModal}
            >
                <DaumPostcode onComplete={handleComplete}/>
            </Modal>
        )}
        </>
    )
}

export default ModalAddressPage