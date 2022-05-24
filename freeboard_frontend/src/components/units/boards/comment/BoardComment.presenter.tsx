import { Rate } from "antd";
import * as S from "./BoardComment.style";
import { IBoardCommentUIProps } from "./BoardComment.types";

const BoardCommentUI = (props: IBoardCommentUIProps) => {
  return (
    <S.CommentWrapper>
      <S.CommentTitleBox>
        <img src="../../image/detail/ic_comment.svg" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentTitleBox>
      <S.CommentAccountBox>
        <S.CommentAccountInput
          onChange={props.onChangeWriter}
          placeholder="작성자"
        />
        <S.CommentAccountInput
          onChange={props.onChangePassword}
          type={"password"}
          placeholder="비밀번호"
        />
        <S.StarBox>
          <Rate
            onChange={props.onChangeRatingNum}
            value={props.ratingNum}
            style={{ color: "#A77EE9;" }}
          />
        </S.StarBox>
      </S.CommentAccountBox>
      <S.CommentContentsBox>
        <S.CommentContentsArea
          maxLength={100}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.CommentSettingsBox>
          <S.CommentTextLength>0/100</S.CommentTextLength>
          <S.CommentWriteButton onClick={props.onClickCommentWrite}>
            등록하기
          </S.CommentWriteButton>
        </S.CommentSettingsBox>
      </S.CommentContentsBox>
      <S.CommentListBox>
        {props.data?.fetchBoardComments.map((el: any, index: number) => (
          <S.CommentItemBox key={el._id}>
            <S.CommentProfileImgBox>
              <S.CommentProfileImg src="../../image/detail/ic_profile.svg" />
            </S.CommentProfileImgBox>
            <S.CommentInfoBox>
              <S.CommentWriterStarBox>
                <S.CommentWriter>{el.writer}</S.CommentWriter>
                <S.CommentStarBox>
                  <Rate
                    onChange={props.onChangeRatingNum}
                    value={props.ratingNum}
                  />
                </S.CommentStarBox>
              </S.CommentWriterStarBox>
              <S.CommentReplyContent>{el.contents}</S.CommentReplyContent>
              <S.CommentDate>{el.createdAt}</S.CommentDate>
            </S.CommentInfoBox>
            <S.CommentReplySettingsBox>
              <S.CommentReplaySettingsImg src="../../image/detail/ic_replay_edit.svg" />
              <S.CommentReplaySettingsImg
                src="../../image/detail/ic_replay_delete.svg"
                onClick={props.onClickCommentDelete}
                id={el._id}
              />
            </S.CommentReplySettingsBox>
          </S.CommentItemBox>
        ))}
      </S.CommentListBox>
    </S.CommentWrapper>
  );
};

export default BoardCommentUI;
