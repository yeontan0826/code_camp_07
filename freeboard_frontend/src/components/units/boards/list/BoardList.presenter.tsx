import * as S from "./BoardList.style";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";

const BoardListUI = (props: IBoardListUIProps) => {
  return (
    <S.Wrapper>
      <S.Header></S.Header>
      <S.Container>
        <S.Box>
          <S.TableTop />
          <S.Row>
            <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
            <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
            <S.columnHeaderWriter>작성자</S.columnHeaderWriter>
            <S.ColumnHeaderDate>날짜</S.ColumnHeaderDate>
          </S.Row>
          {props.data?.fetchBoards.map((el: any, index: number) => (
            <S.BoardsRow
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToBoardDetail}
            >
              <S.ColumnNumber>{index + 1}</S.ColumnNumber>
              <S.ColumnTitle>{el.title}</S.ColumnTitle>
              <S.columnWriter>{el.writer}</S.columnWriter>
              <S.columnDate>{getDate(el.createdAt)}</S.columnDate>
            </S.BoardsRow>
          ))}
          <S.TableBottom />
          <S.Footer>
            <S.Button onClick={props.onClickMoveToWrite}>
              <S.PencilIcon src="/image/list/ic_write.svg" />
              게시물 등록하기
            </S.Button>
          </S.Footer>
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

export default BoardListUI;
