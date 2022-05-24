import { Modal } from "antd";

const ModalAlertPage = () => {
    const onClickSuccessButton = () => {
        Modal.success({
            title: "1111",
            content: (
                <div>
                    <hr />
                    <div>성공</div>
                    <div>입니다</div>
                </div>
            ),
        });
    };

    const onClickFailButton = () => {
        Modal.error({
            title: "2222",
            content: "비밀번호가 틀렸습니다",
        });
    };

    return (
        <div>
            <button onClick={onClickSuccessButton}>성공했을때!!</button>
            <button onClick={onClickFailButton}>실패했을때!!</button>
        </div>
    );
};

export default ModalAlertPage;
