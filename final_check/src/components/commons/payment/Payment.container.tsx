import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMoveToPage } from "../hooks/useMoveToPage";
import PaymentUI from "./Payment.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./Payment.queries";
import { IPaymentProps } from "./Payment.types";

declare const window: typeof globalThis & {
    IMP: any;
};

const Payment = (props: IPaymentProps) => {
    const router = useRouter();
    const { onMoveToPage } = useMoveToPage();

    const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);

    const [price, setPrice] = useState<number | null>(null);
    const onChangePrice = (event: ChangeEvent<HTMLSelectElement>) => {
        setPrice(Number(event.target.value));
    };

    const requestPay = () => {
        props.onModalToggle();

        const IMP = window.IMP;
        IMP.init("imp49910675");
        IMP.request_pay(
            {
                // param
                pg: "html5_inicis",
                pay_method: "card",
                // merchant_uid: "ORD20180131-0000011",
                name: "포인트 충전",
                amount: price,
                buyer_email: props.data?.fetchUserLoggedIn.email,
                buyer_name: props.data?.fetchUserLoggedIn.name,
                buyer_tel: "010-1234-5678",
                buyer_addr: "서울특별시 강남구 신사동",
                buyer_postcode: "01181",
                m_redirect_url: onMoveToPage(router.asPath), // /(모바일) 반응형 웹페이지할때는 꼭.
            },
            async (rsp: any) => {
                if (rsp.success) {
                    console.log(rsp.paid_amount); // 충전한 포인트
                    console.log(rsp.imp_uid); // 충전 후 반환한 impUid

                    const result = await createPointTransactionOfLoading({
                        variables: { impUid: rsp.imp_uid },
                    });

                    console.log(result);
                    props.refetch();

                    Modal.success({
                        content: `${rsp.paid_amount}포인트 충전에 성공하셨습니다.`,
                    });
                } else {
                    Modal.error({
                        title: "결재 실패",
                        content: "결재를 실패했습니다. 다시 시도해 주세요.",
                    });
                }
            }
        );
    };
    return (
        <PaymentUI
            isModalVisible={props.isModalVisible}
            onModalToggle={props.onModalToggle}
            price={price}
            onChangePrice={onChangePrice}
            requestPay={requestPay}
        />
    );
};

export default Payment;
