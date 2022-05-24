import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

const BoardDetail = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.page,
    },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  console.log(data);

  const onClickMoveToList = () => {
    router.push(`/boards/list`);
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/detail/${router.query.page}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.page },
      });
      alert("게시글이 삭제되었습니다.");
      router.push(`/boards/list`);
    } catch (error) {
      console.error(`!!!!!!   에러발생   !!!!!!\n${error}`);
    }
  };

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: router.query.page },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.page },
          },
        ],
      });
    } catch (error) {
      console.error(`!!!!!!   에러발생   !!!!!!\n${error}`);
    }
  };

  const onClickDislike = async () => {
    try {
      await dislikeBoard({
        variables: { boardId: router.query.page },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.page },
          },
        ],
      });
    } catch (error) {
      console.error(`!!!!!!   에러발생   !!!!!!\n${error}`);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      onClickDelete={onClickDelete}
    />
  );
};

export default BoardDetail;
