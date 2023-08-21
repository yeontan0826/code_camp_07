import * as M from "./MarketList.style";
import { IMarketListUIProps } from "./MarketList.types";
import InfiniteScroll from "react-infinite-scroller";
import MarketItem from "../../../commons/list/item/MarketItem.container";
import { v4 as uuidv4 } from "uuid";

const MarketListUI = (props: IMarketListUIProps) => {
    return (
        <M.Wrapper>
            {props.data && (
                <InfiniteScroll pageStart={0} loadMore={props.loadMoreProducts} hasMore={true} useWindow={true}>
                    <M.ListContainer>
                        {props.data?.fetchUseditems.map((el: any) => (
                            <MarketItem key={uuidv4()} el={el} />
                        ))}
                    </M.ListContainer>
                </InfiniteScroll>
            )}
        </M.Wrapper>
    );
};

export default MarketListUI;
