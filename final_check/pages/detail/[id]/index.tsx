import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import withAuth from "../../../src/components/commons/hocs/withAuth";
import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/market/detail/MarketDetail.queries";

const MarketDetailPage = () => {
    const router = useRouter();

    const { data, refetch } = useQuery(FETCH_USED_ITEM, {
        variables: {
            useditemId: router.query.id,
        },
    });

    return <>{data && <MarketDetail data={data} refetch={refetch} />}</>;
};

export default withAuth(MarketDetailPage);
