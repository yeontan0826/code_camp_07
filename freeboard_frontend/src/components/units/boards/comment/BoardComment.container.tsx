import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentQueries";

const BoardComment = () => {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.page,
    },
  });

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [ratingNum, setRatingNum] = useState(0);

  const onChangeRatingNum = (ratingNum: number) => {
    setRatingNum(ratingNum);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickCommentWrite = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: Number(1.0),
          },
          boardId: router.query.page,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.page },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      console.error(`!!!!!!!!! 에러발생 !!!!!!!!!\n${error}`);
    }
  };

  const onClickCommentDelete = async (event: MouseEvent<HTMLImageElement>) => {
    try {
      const password = prompt("비밀번호를 입력해주세요");
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.page },
          },
        ],
      });
    } catch (error) {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <BoardCommentUI
      data={data}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCommentWrite={onClickCommentWrite}
      onClickCommentDelete={onClickCommentDelete}
      onChangeRatingNum={onChangeRatingNum}
      ratingNum={ratingNum}
    />
  );
};

export default BoardComment;
