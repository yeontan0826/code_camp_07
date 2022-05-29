import * as S from "./BoardList.style";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Pagination from "../../../commons/pagination/Pagination.contanier";
import { EditFilled } from "@ant-design/icons";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <S.Button onClick={props.onClickMoveToWrite}>
            <EditFilled />
            게시물 등록하기
          </S.Button>
          <S.TableTop />
          <S.Row>
            <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
            <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
            <S.columnHeaderWriter>작성자</S.columnHeaderWriter>
            <S.ColumnHeaderDate>날짜</S.ColumnHeaderDate>
          </S.Row>
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <S.BoardsRow key={el._id} id={el._id} onClick={props.onClickMoveToBoardDetail}>
              <S.ColumnNumber>{index + 1}</S.ColumnNumber>
              <S.ColumnTitle>{el.title}</S.ColumnTitle>
              <S.columnWriter>{el.writer}</S.columnWriter>
              <S.columnDate>{getDate(el.createdAt)}</S.columnDate>
            </S.BoardsRow>
          ))}
          <S.TableBottom />
          <Pagination refetch={props.refetch} dataBoardsCount={props.dataBoardsCount} />
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

export default BoardListUI;
