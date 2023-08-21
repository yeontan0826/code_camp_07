import { ApolloQueryResult } from "@apollo/client";

export interface IMarketDetailProps {
    data?: any;
    refetch: (
        variables?:
            | Partial<{
                  useditemId: string | string[] | undefined;
              }>
            | undefined
    ) => Promise<ApolloQueryResult<any>>;
}

export interface IMarketDetailUIProps {
    data?: any;
    userId: any;
    isAddressNotNull: boolean;
    onClickBasket: () => void;
    onClickBuying: () => void;
    onClickPick: () => void;
    onClickDelete: () => void;
}
