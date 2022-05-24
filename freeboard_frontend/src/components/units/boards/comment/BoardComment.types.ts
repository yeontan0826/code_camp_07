import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentUIProps {
  data?: any;
  onClickCommentWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCommentDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRatingNum: (value: number) => void;
  ratingNum: number;
}
