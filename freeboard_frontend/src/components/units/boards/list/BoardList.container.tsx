import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveToWrite = () => {
    router.push("/boards/write");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/detail/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToWrite={onClickMoveToWrite}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      dataBoardsCount={dataBoardsCount}
    />
  );
}
