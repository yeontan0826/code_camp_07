import { ApolloQueryResult } from "@apollo/client";

export interface ICommentListProps {
    data?: any;
    loadMoreProducts: () => void;
    refetch: (
        variables?:
            | Partial<{
                  useditemId: string | string[] | undefined;
              }>
            | undefined
    ) => Promise<ApolloQueryResult<any>>;
}

export interface ICommentListUIProps {
    data?: any;
    loadMoreProducts: () => void;
    userId: string;
    onDeleteQuestion: (userId: string) => () => void;
    refetch: (
        variables?:
            | Partial<{
                  useditemId: string | string[] | undefined;
              }>
            | undefined
    ) => Promise<ApolloQueryResult<any>>;
}
