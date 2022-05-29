import * as S from "./Pagination.style";
import { IPaginationUIProps } from "./Pagination.types";

const PaginationUI = (props: IPaginationUIProps) => {
  return (
    <S.PaginationWrapper>
      <S.FirstPageArrow onClick={props.onClickMoveFirstPage} isFirst={props.startPage === 1}>
        {"<<"}
      </S.FirstPageArrow>
      <S.PrevArrow onClick={props.onClickPrev} isFirst={props.startPage === 1}>
        {"<"}
      </S.PrevArrow>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.PageNum
              key={index + props.startPage}
              id={String(index + props.startPage)}
              isSelected={props.activePage === index + props.startPage}
              onClick={props.onClickPage}
            >
              {index + props.startPage}
            </S.PageNum>
          )
      )}
      <S.NextArrow onClick={props.onClickNext} isLast={props.lastPage - props.startPage <= 10}>
        {">"}
      </S.NextArrow>
      <S.LastPageArrow
        onClick={props.onClickMoveLastPage}
        isLast={props.lastPage - props.startPage <= 10}
      >
        {">>"}
      </S.LastPageArrow>
    </S.PaginationWrapper>
  );
};

export default PaginationUI;
