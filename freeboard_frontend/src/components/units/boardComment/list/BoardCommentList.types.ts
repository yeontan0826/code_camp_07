import { ChangeEvent } from "react";

export interface IBoardCommentListProps {
  el: any;
  deleteCommentModalVisible: boolean;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  contents: string;
  onClickCommentDelete: (event: any) => void;
  onChangeDeleteCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  commentDeleteOK: () => void;
  commentDeleteCancel: () => void;
  onChangeVisible: () => void;
  isVisible: boolean;
  onChangeRating: (rating: number) => void;
  rating: number;
  onClickCommentUpdate: () => void;
}

export interface IUpdateBoardCommentInput {
  rating?: number;
  contents?: string;
}
