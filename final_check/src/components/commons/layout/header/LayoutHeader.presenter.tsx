import Head from "next/head";
import { useRecoilState } from "recoil";
import { priceComma } from "../../../../commons/libraries/priceComma";
import { accessTokenState, basketState } from "../../../../commons/store/States";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import Payment from "../../payment/Payment.container";
import * as H from "./LayoutHeader.style";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

const LayoutHeaderUI = (props: ILayoutHeaderUIProps) => {
    const [accessToken] = useRecoilState(accessTokenState);
    const [basket] = useRecoilState(basketState);
    const { onMoveToPage } = useMoveToPage();

    return (
        <>
            <Head>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
                <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
            </Head>
            <H.Wrapper>
                <H.Container>
                    {accessToken ? (
                        <>
                            <H.UserInfoDiv>
                                <H.UserName>{props.data?.fetchUserLoggedIn.name} 님 포인트</H.UserName>
                                <H.UserPriceSpan>{priceComma(props.data?.fetchUserLoggedIn.userPoint.amount)}</H.UserPriceSpan>
                                <H.UserInfoSpan>P</H.UserInfoSpan>
                                <H.UserPointCharge onClick={props.onModalToggle}>충전</H.UserPointCharge>
                            </H.UserInfoDiv>
                            <H.Item onClick={props.onClickLogout}>로그아웃</H.Item>
                        </>
                    ) : (
                        <>
                            <H.Item onClick={onMoveToPage(`/login`)}>로그인</H.Item>
                            <H.Item onClick={onMoveToPage(`/register`)}>회원가입</H.Item>
                        </>
                    )}
                    <H.BasketContainer>
                        <H.Item>장바구니</H.Item>
                        <H.BasketCountSpan>{basket.length}</H.BasketCountSpan>
                    </H.BasketContainer>
                </H.Container>
                {/* 결재 Modal */}
                <Payment data={props.data} refetch={props.refetch} isModalVisible={props.isModalVisible} onModalToggle={props.onModalToggle} />
            </H.Wrapper>
        </>
    );
};

export default LayoutHeaderUI;
