import { useMoveToPage } from "../../hooks/useMoveToPage";
import MarketItemUI from "./MarketItem.presenter";
import { IMarketItemProps } from "./MarketItem.types";

const MarketItem = (props: IMarketItemProps) => {
    const { onMoveToPage } = useMoveToPage();

    const onClickItem = (el: any) => (event: any) => {
        const recentProducts = JSON.parse(sessionStorage.getItem("recentProducts") || "[]");
        const temp = recentProducts.filter((product: { _id: string }) => product._id === el._id);

        if (recentProducts.length >= 3) {
            recentProducts.pop();
        }

        if (temp.length === 0) {
            const { __typename, ...newEl } = el;
            recentProducts.unshift(newEl);
            sessionStorage.setItem("recentProducts", JSON.stringify(recentProducts));
        }
        console.log("clicked");
        onMoveToPage(`/detail/${event.currentTarget.id}`)();
    };

    return <MarketItemUI el={props.el} onClickItem={onClickItem} />;
};

export default MarketItem;
