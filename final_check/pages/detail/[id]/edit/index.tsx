import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";

const MarketEditPage = () => {
    const router = useRouter();
    const { data, loading } = useQuery(FETCH_USED_ITEM, {
        variables: {
            useditemId: router.query.id,
        },
    });

    return <>{loading || <MarketWrite isEdit={true} data={data} />}</>;
};

export default MarketEditPage;
