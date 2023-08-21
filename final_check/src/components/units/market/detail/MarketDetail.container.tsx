import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { basketState } from "../../../../commons/store/States";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_USER_LOGGED_IN } from "../../../commons/layout/header/LayoutHeader.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, DELETE_USED_ITEM, FETCH_USED_ITEM, TOGGLE_USED_ITEM_PICK } from "./MarketDetail.queries";
import { IMarketDetailProps } from "./MarketDetail.types";

declare const window: typeof globalThis & {
    kakao: any;
};

const MarketDetail = (props: IMarketDetailProps) => {
    console.log(props.data);
    const router = useRouter();
    const { onReplaceToPage } = useMoveToPage();

    const [basket, setBasket] = useRecoilState(basketState);

    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);
    const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
    const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

    const isAddressNotNull = props.data.fetchUseditem.useditemAddress !== null && props.data.fetchUseditem.useditemAddress.lat !== null;

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=183c608811a60e60617fe9f64e57b24a&autoload=false&libraries=services";
        document.head.appendChild(script);

        if (isAddressNotNull) {
            const position = {
                lat: props.data?.fetchUseditem.useditemAddress.lat,
                lng: props.data?.fetchUseditem.useditemAddress.lng,
            };

            script.onload = () => {
                window.kakao.maps.load(() => {
                    const container = document.getElementById("map");
                    const options = {
                        center: new window.kakao.maps.LatLng(position.lat, position.lng),
                        level: 3,
                    };

                    const map = new window.kakao.maps.Map(container, options);

                    // marker position
                    const marker = new window.kakao.maps.Marker({
                        position: new window.kakao.maps.LatLng(position.lat, position.lng),
                    });

                    marker.setMap(map);
                    map.setDraggable(false);
                    map.setZoomable(false);
                });
            };
        }
    }, []);

    const onClickPick = async () => {
        try {
            await toggleUseditemPick({
                variables: {
                    useditemId: props.data.fetchUseditem._id,
                },
            });
            props.refetch();
        } catch (error: any) {
            Modal.error({
                title: "찜 오류",
                content: error.message,
            });
        }
    };

    const onClickBasket = () => {
        const temp = basket.filter((basketId: string) => basketId === router.query.id);
        if (temp.length > 0) {
            Modal.error({
                content: "이미 담겨있는 상품입니다.",
            });
            return;
        }

        const newBasket = [router.query.id, ...basket];
        localStorage.setItem("basket", JSON.stringify(newBasket));
        setBasket(newBasket);

        Modal.success({
            content: "장바구니에 담았습니다.",
        });
    };

    const onClickBuying = async () => {
        try {
            await createPointTransactionOfBuyingAndSelling({
                variables: {
                    useditemId: router.query.id,
                },
            });

            Modal.success({
                content: "상품을 구매하였습니다.",
                onOk() {
                    onReplaceToPage(`/`)();
                },
                onCancel() {
                    onReplaceToPage(`/`)();
                },
            });
        } catch (error: any) {
            Modal.error({
                title: "상품 구매 실패",
                content: error.message,
            });
        }
    };

    const onClickDelete = async () => {
        try {
            const result = await deleteUseditem({
                variables: {
                    useditemId: router.query.id,
                },
            });

            console.log(result);

            Modal.success({
                content: "상품을 삭제했습니다.",
                onOk() {
                    onReplaceToPage(`/`)();
                },
                onCancel() {
                    onReplaceToPage(`/`)();
                },
            });
        } catch (error: any) {
            Modal.error({
                title: "상품 삭제 실패",
                content: error.message,
            });
        }
    };

    return (
        <MarketDetailUI
            {...props}
            userId={data}
            isAddressNotNull={isAddressNotNull}
            onClickBasket={onClickBasket}
            onClickBuying={onClickBuying}
            onClickPick={onClickPick}
            onClickDelete={onClickDelete}
        />
    );
};

export default MarketDetail;
