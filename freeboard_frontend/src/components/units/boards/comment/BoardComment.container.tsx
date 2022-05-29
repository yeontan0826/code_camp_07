import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardComment.queries";

const BoardComment = () => {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.page,
    },
  });

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeRating = (ratingNum: number) => {
    setRating(ratingNum);
  };

  const onClickCommentWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
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
      Modal.success({
        content: "댓글 등록이 완료되었습니다.",
      });
    } catch (error) {
      Modal.error({
        title: "ERROR",
        content: error,
      });
    }
  };

  const loadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardsComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult?.fetchBoardComments],
        };
      },
    });
  };

  return (
    <BoardCommentUI
      data={data}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCommentWrite={onClickCommentWrite}
      onChangeRating={onChangeRating}
      contents={contents}
      rating={rating}
      loadMore={loadMore}
    />
  );
};

export default BoardComment;
