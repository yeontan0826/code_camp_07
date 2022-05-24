import { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data?: any;
  onClickMoveToList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickLike: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDislike: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}
