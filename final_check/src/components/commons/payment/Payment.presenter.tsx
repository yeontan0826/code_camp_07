import * as P from "./Payment.style";
import { IPaymentUIProps } from "./Payment.types";

const PaymentUI = (props: IPaymentUIProps) => {
    return (
        <P.PaymentModal visible={props.isModalVisible} width={450} footer={null} onCancel={props.onModalToggle}>
            <P.PaymentDiv>
                <P.PaymentTitle>충전하실 금액을 선택해주세요!</P.PaymentTitle>
                <P.PaymentSelect onChange={props.onChangePrice}>
                    <option disabled selected>
                        충전 금액 선택
                    </option>
                    <option value={100}>100</option>
                    <option value={500}>500</option>
                    <option value={2000}>2,000</option>
                    <option value={5000}>5,000</option>
                </P.PaymentSelect>
                <P.PaymentButton disabled={props.price === null} onClick={props.requestPay}>
                    충전하기
                </P.PaymentButton>
            </P.PaymentDiv>
        </P.PaymentModal>
    );
};

export default PaymentUI;
