import { OperationVariables, ApolloQueryResult } from "@apollo/client";

export interface IPaginationProps {
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
  dataBoardsCount: any;
}

export interface IPaginationUIProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: any) => void;
  onClickMoveFirstPage: () => void;
  onClickMoveLastPage: () => void;
  onClickNext: () => void;
  onClickPrev: () => void;
}
