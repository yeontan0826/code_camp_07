import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent } from "react";

export interface IPaymentProps {
    data?: any;
    isModalVisible: boolean;
    onModalToggle: () => void;
    refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>;
}

export interface IPaymentUIProps {
    isModalVisible: boolean;
    onModalToggle: () => void;
    price: number | null;
    onChangePrice: (event: ChangeEvent<HTMLSelectElement>) => void;
    requestPay: () => void;
}
