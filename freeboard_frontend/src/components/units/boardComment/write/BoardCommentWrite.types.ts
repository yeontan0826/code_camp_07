import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentWriteUIProps {
  data?: any;
  onClickCommentWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value: number) => void;
  contents: string;
  rating: number;
  loadMore: () => void;
}
