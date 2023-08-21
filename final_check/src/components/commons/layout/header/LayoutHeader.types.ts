import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface ILayoutHeaderUIProps {
    data?: any;
    refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>;
    onClickLogout: () => void;
    isModalVisible: boolean;
    onModalToggle: () => void;
}
