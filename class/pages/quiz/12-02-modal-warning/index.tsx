import { Modal } from "antd";
import { useState } from "react"

const ModalWarningPage = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onToggleModal = () => {
        setIsModalVisible((prev) => !prev);
    };  

    return(
        <>
        <button onClick={onToggleModal}>모달열기</button>
        {isModalVisible && (
            <Modal
                title={"게시글 등록"}
                visible={true}
                onOk={onToggleModal}
                onCancel={onToggleModal}
            >
                <div>게시글이 등록되었습니다.</div>
            </Modal>
        )}
        </>
    )
}

export default ModalWarningPage