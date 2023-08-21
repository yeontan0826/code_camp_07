import * as I from "./MarketItem.style";
import TitleSub from "../../typeface/title/Title_Sub";
import { priceComma } from "../../../../commons/libraries/priceComma";
import LazyLoad from "react-lazyload";
import { IMarketItemUIProps } from "./MarketItem.types";
import { timeForToday } from "../../../../commons/libraries/timeForToday";

const MarketItemUI = (props: IMarketItemUIProps) => {
    return (
        <LazyLoad height={350}>
            <I.ItemWrapper id={props.el._id} onClick={props.onClickItem(props.el)}>
                <I.ItemImage src={props.el.images[0] ? `https://storage.googleapis.com/${props.el.images[0]}` : "/images/market/list/no_image.webp"} />
                <I.ItemContents>
                    <TitleSub text={props.el.name ? props.el.name : "상품명이 없습니다"} />
                    <I.ItemSubContents>
                        <TitleSub text={props.el.price ? `${priceComma(props.el.price)}원` : "가격이 없습니다"} />
                        <I.ItemCreatedAt>{timeForToday(props.el.createdAt)}</I.ItemCreatedAt>
                    </I.ItemSubContents>
                </I.ItemContents>
            </I.ItemWrapper>
        </LazyLoad>
    );
};

export default MarketItemUI;
