import { useQuery } from "@apollo/client";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

const MarketList = () => {
    const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
        variables: {
            page: 1,
        },
    });

    const loadMoreProducts = () => {
        if (!data) return;

        fetchMore({
            variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult?.fetchUseditems) {
                    return { fetchUseditems: [...prev.fetchUseditems] };
                }
                return {
                    fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult?.fetchUseditems],
                };
            },
        });
    };

    return <MarketListUI data={data} loadMoreProducts={loadMoreProducts} />;
};

export default MarketList;
