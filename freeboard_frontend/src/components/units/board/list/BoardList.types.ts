import { MouseEvent } from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IBoardListUIProps {
  data?: any;
  onClickMoveToWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
  dataBoardsCount: number;
}
