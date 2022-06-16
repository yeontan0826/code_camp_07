import { Modal } from "antd";
import Head from "next/head";

declare const window: typeof globalThis & {
	IMP: any;
};

const PaymentPage = () => {
	const requestPay = () => {
		const IMP = window.IMP;
		IMP.init("imp30956010");

		IMP.request_pay(
			{
				// param
				pg: "html5_inicis",
				pay_method: "card",
				// merchant_uid: "ORD20180131-0000011",
				name: "노르웨이 회전 의자",
				amount: 100000,
				buyer_email: "gildong@gmail.com",
				buyer_name: "홍길동",
				buyer_tel: "010-4242-4242",
				buyer_addr: "서울특별시 강남구 신사동",
				buyer_postcode: "01181",
				m_redirect_url: "http://localhost:3000/28-01-payment", // /(모바일) 반응형 웹페이지할때는 꼭.
			},
			(rsp: any) => {
				// callback
				if (rsp.success) {
					// 결재 성공 로직
					console.log(rsp);

					// 백엔드에 관련된 데이터 넘겨주기 (=> 즉, mutation 실행하기)
					// ex. createPointTransactionOfLoading (포인트충전하기)
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
			<button onClick={requestPay}>결제하기</button>
		</div>
	);
};
export default PaymentPage;
