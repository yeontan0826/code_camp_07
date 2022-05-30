import { Rate } from "antd";
import * as S from "./BoardCommentWrite.style";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import BoardCommentList from "../list/BoardCommentList.container";
import InfiniteScroll from "react-infinite-scroller";

const BoardCommentWriteUI = (props: IBoardCommentWriteUIProps) => {
  return (
    <S.CommentWrapper>
      <S.CommentTitleBox>
        <img src="../../image/detail/ic_comment.svg" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentTitleBox>
      <S.CommentAccountBox>
        <S.CommentAccountInput onChange={props.onChangeWriter} placeholder="작성자" />
        <S.CommentAccountInput
          onChange={props.onChangePassword}
          type={"password"}
          placeholder="비밀번호"
        />
        <S.StarBox>
          <Rate onChange={props.onChangeRating} value={props.rating} style={{ color: "#A77EE9" }} />
        </S.StarBox>
      </S.CommentAccountBox>
      <S.CommentContentsBox>
        <S.CommentContentsArea
          maxLength={200}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.CommentSettingsBox>
          <S.CommentTextLength>{props.contents.length}/100</S.CommentTextLength>
          <S.CommentWriteButton onClick={props.onClickCommentWrite}>등록하기</S.CommentWriteButton>
        </S.CommentSettingsBox>
      </S.CommentContentsBox>
      <S.CommentListBox>
        <InfiniteScroll pageStart={0} loadMore={props.loadMore} hasMore={true} useWindow={true}>
          {props.data?.fetchBoardComments.map((el: any) => (
            <BoardCommentList key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </S.CommentListBox>
    </S.CommentWrapper>
  );
};

export default BoardCommentWriteUI;
