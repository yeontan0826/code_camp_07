import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

declare const window: typeof globalThis & {
	IMP: any;
};

const PaymentLoadingPage = () => {
	const router = useRouter();

	const [cost, setCost] = useState<number>(500);

	const onChangeCost = (event: any) => {
		setCost(event.target.value);
	};

	const requestPay = () => {
		const IMP = window.IMP;
		IMP.init("imp30956010");
		IMP.request_pay(
			{
				// param
				pg: "html5_inicis",
				pay_method: "card",
				// merchant_uid: "ORD20180131-0000011",
				name: "코드캠프",
				amount: cost,
				buyer_email: "yeontan0826@gmail.com",
				buyer_name: "류연찬",
				buyer_tel: "010-1234-5678",
				buyer_addr: "서울특별시 강남구 신사동",
				buyer_postcode: "01181",
				m_redirect_url: "http://localhost:3000/quiz/28-03-payment-complete", // /(모바일) 반응형 웹페이지할때는 꼭.
			},
			(rsp: any) => {
				// callback
				if (rsp.success) {
					// 결재 성공 로직
					Modal.success({
						title: "결제 성공",
						content: "결제에 성공했습니다.",
						onOk() {
							router.push("/quiz/28-03-payment-complete");
						},
					});
				} else {
					// 결제 실패 로직
					Modal.error({
						title: "결제 실패",
						content: "결제를 실패했습니다. 다시 시도해 주세요.",
					});
				}
			}
		);
	};

	return (
		<div>
			<Head>
				<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
				<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
			</Head>
			<select onChange={onChangeCost}>
				<option value={500}>500원</option>
				<option value={1000}>1000원</option>
				<option value={2000}>2000원</option>
				<option value={5000}>5000원</option>
			</select>
			<button onClick={requestPay}>결제하기</button>
		</div>
	);
};

export default PaymentLoadingPage;
