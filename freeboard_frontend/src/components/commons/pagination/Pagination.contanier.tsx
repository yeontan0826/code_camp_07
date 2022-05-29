import { useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationProps } from "./Pagination.types";

const Pagination = (props: IPaginationProps) => {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(props.dataBoardsCount?.fetchBoardsCount / 10);
  const [activePage, setActivePage] = useState(1);

  const onClickPage = (event: any) => {
    props.refetch({ page: Number(event.target.id) });
    setActivePage(Number(event.target.id));
  };

  const onClickMoveFirstPage = () => {
    setStartPage(1);
    props.refetch({ page: 1 });
    setActivePage(1);
  };

  const onClickMoveLastPage = () => {
    setStartPage(lastPage - (lastPage % 10) + 1);
    props.refetch({ page: lastPage });
    setActivePage(lastPage);
  };

  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      props.refetch({ page: startPage + 10 });
      setActivePage(startPage + 10);
    }
  };

  const onClickPrev = () => {
    if (startPage !== 1) {
      setStartPage((prev) => prev - 10);
      props.refetch({ page: startPage - 10 });
      setActivePage(startPage - 10);
    }
  };

  return (
    <PaginationUI
      onClickMoveFirstPage={onClickMoveFirstPage}
      onClickMoveLastPage={onClickMoveLastPage}
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPage={onClickPage}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
    />
  );
};

export default Pagination;
