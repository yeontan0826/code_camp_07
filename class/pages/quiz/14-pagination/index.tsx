import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const CenterBody = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const ColumnHead = styled.div`
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e5e5e5;
`;

const ColumnPageItem = styled.div`
  display: flex;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    background-color: #f3e5f3;
  }
`;

const RowHeadNum = styled.div`
  width: 10%;
`;

const RowHeadWriter = styled.div`
  width: 20%;
`;

const RowHeadTitle = styled.div`
  width: 70%;
`;

const RowNum = styled.div`
  width: 10%;
  text-align: center;
`;

const RowWriter = styled.div`
  width: 20%;
  text-align: center;
`;

const RowTitle = styled.div`
  width: 70%;
  padding-left: 10px;
`;

const PageNumColumn = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const pageArrow = styled.button`
  font-weight: bold;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const LeftArrow = styled(pageArrow)`
  display: ${(props: { isFirst: boolean }) => (props.isFirst ? "none" : "block")};
`;

const RightArrow = styled(pageArrow)`
  display: ${(props: { isLast: boolean }) => (props.isLast ? "none" : "block")};
`;

const PageNum = styled.span`
  width: 25px;
  height: 25px;
  text-align: center;
  margin: 0 5px;
  cursor: pointer;
  transition: 0.5s;
  border-bottom: ${(props: { isSelected: boolean }) => (props.isSelected ? "2px solid purple" : "none")};
  color: ${(props: { isSelected: boolean }) => (props.isSelected ? "purple" : "black")};
  :hover {
    transition: 0.5s;
    color: #6e396e;
  }
`;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const BoardPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const [currentPage, setCurrentPage] = useState(1);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  };

  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      refetch({ page: startPage + 10 });
      setCurrentPage(startPage + 10);
    }
  };

  const onClickPrev = () => {
    if (startPage !== 1) {
      setStartPage((prev) => prev - 10);
      refetch({ page: startPage - 10 });
      setCurrentPage(startPage - 10);
    }
  };

  return (
    <CenterBody>
      <Wrapper>
        <ColumnHead>
          <RowHeadNum>번호</RowHeadNum>
          <RowHeadWriter>작성자</RowHeadWriter>
          <RowHeadTitle>제목</RowHeadTitle>
        </ColumnHead>
        {data?.fetchBoards.map((el: any, index: number) => (
          <ColumnPageItem key={el._id}>
            <RowNum>{index + 1}</RowNum>
            <RowWriter>{el.writer}</RowWriter>
            <RowTitle>{el.title}</RowTitle>
          </ColumnPageItem>
        ))}
        <PageNumColumn>
          <LeftArrow onClick={onClickPrev} isFirst={startPage === 1}>
            &lt;
          </LeftArrow>
          {new Array(10).fill(1).map(
            (_, index) =>
              index + startPage <= lastPage && (
                <PageNum key={index + startPage} id={String(index + startPage)} onClick={onClickPage} isSelected={currentPage === index + startPage}>
                  {index + startPage}
                </PageNum>
              )
          )}
          <RightArrow onClick={onClickNext} isLast={dataBoardsCount?.fetchBoardsCount - startPage * 10 <= 10}>
            &gt;
          </RightArrow>
        </PageNumColumn>
      </Wrapper>
    </CenterBody>
  );
};

export default BoardPage;
