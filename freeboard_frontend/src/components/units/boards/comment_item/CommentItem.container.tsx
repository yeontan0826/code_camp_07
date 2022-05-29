import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import CommentItemUI from "./CommentItem.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./CommentItem.queries";
import { IUpdateBoardCommentInput } from "./CommentItem.types";

const CommentItem = (props: { el: any }) => {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  /* Delete Modal Start */
  const [deleteCommentModalVisible, setDeleteCommentModalVisible] = useState(false);

  const deleteCommentModalToggle = () => {
    setDeleteCommentModalVisible((prev) => !prev);
  };

  const [boardCommentId, setBoardCommentId] = useState("");
  const [deleteCommentPassword, setDeleteCommentPassword] = useState("");

  const onChangeDeleteCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setDeleteCommentPassword(event.target.value);
  };
  /* Delete Modal End */

  const [isVisible, setIsVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(0);
  const [contents, setContents] = useState("");

  const onChangeVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeRating = (ratingNum: number) => {
    setRating(ratingNum);
    console.log(ratingNum);
  };

  const onClickCommentDelete = async (event: any) => {
    setBoardCommentId(event.target.id);
    deleteCommentModalToggle();
  };

  const commentDeleteOK = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: deleteCommentPassword,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.page },
          },
        ],
      });
      Modal.success({
        content: "댓글을 삭제했습니다.",
        onOk() {
          deleteCommentModalToggle();
        },
      });
    } catch (error) {
      console.log(error);
      Modal.error({
        content: "비밀번호가 일치하지 않습니다.",
      });
    }
  };

  const commentDeleteCancel = () => {
    deleteCommentModalToggle();
  };

  const onClickCommentUpdate = async () => {
    if (!password) {
      Modal.error({
        content: "비밀번호를 입력해주세요",
      });
      return;
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (rating) updateBoardCommentInput.rating = rating;
    if (contents) updateBoardCommentInput.contents = contents;

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el._id,
        },
      });
    } catch (error) {
      Modal.error({
        title: "비밀번호 불일치",
        content: error,
      });
    }
  };

  return (
    <CommentItemUI
      el={props.el}
      deleteCommentModalVisible={deleteCommentModalVisible}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      contents={contents}
      onClickCommentDelete={onClickCommentDelete}
      onChangeDeleteCommentPassword={onChangeDeleteCommentPassword}
      commentDeleteOK={commentDeleteOK}
      commentDeleteCancel={commentDeleteCancel}
      onChangeVisible={onChangeVisible}
      isVisible={isVisible}
      onChangeRating={onChangeRating}
      rating={rating}
      onClickCommentUpdate={onClickCommentUpdate}
    />
  );
};

export default CommentItem;
