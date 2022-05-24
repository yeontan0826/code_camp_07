import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: any;
  onClickMoveToWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
