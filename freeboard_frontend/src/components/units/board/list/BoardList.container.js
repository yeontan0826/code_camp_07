import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToWrite = () => {
    router.push("/boards/write");
  };

  const onClickMoveToBoardDetail = (event) => {
      router.push(`/boards/detail/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToWrite={onClickMoveToWrite}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
