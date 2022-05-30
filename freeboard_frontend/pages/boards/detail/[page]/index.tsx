import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.container";
// import BoardCommentList from "../../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../../src/components/units/boardComment/write/BoardCommentWrite.container";

const BoardDetailPage = () => {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <BoardDetail />
      <BoardCommentWrite />
      {/* <BoardCommentList /> */}
    </div>
  );
};

export default BoardDetailPage;
