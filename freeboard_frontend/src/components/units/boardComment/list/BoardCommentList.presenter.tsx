import { Modal, Rate } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardCommentList.style";
import { IBoardCommentListProps } from "./BoardCommentList.types";

const BoardCommentListUI = (props: IBoardCommentListProps) => {
  return (
    <S.CommentColumnBox>
      <S.CommentItemBox>
        <S.CommentProfileImgBox>
          <S.CommentProfileImg src="../../image/detail/ic_profile.svg" />
        </S.CommentProfileImgBox>
        <S.CommentInfoBox>
          <S.CommentWriterStarBox>
            <S.CommentWriter>{props.el.writer}</S.CommentWriter>
            <S.CommentStarBox>
              <Rate disabled={true} value={props.el.rating} />
            </S.CommentStarBox>
          </S.CommentWriterStarBox>
          <S.CommentReplyContent>{props.el.contents}</S.CommentReplyContent>
          <S.CommentDate>{getDate(props.el.createdAt)}</S.CommentDate>
        </S.CommentInfoBox>
        <S.CommentReplySettingsBox>
          <S.CommentReplaySettingsImg
            src="../../image/detail/ic_replay_edit.svg"
            onClick={props.onChangeVisible}
          />
          <S.CommentReplaySettingsImg
            src="../../image/detail/ic_replay_delete.svg"
            onClick={props.onClickCommentDelete}
            id={props.el._id}
          />
        </S.CommentReplySettingsBox>
      </S.CommentItemBox>
      {props.isVisible === true && (
        <div style={{ backgroundColor: "#fdfaff", padding: "15px" }}>
          <S.CommentAccountBox>
            <S.CommentAccountInput
              placeholder="작성자"
              defaultValue={props.el?.writer || ""}
              readOnly={!!props.el?.writer}
            />
            <S.CommentAccountInput
              type={"password"}
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <S.StarBox>
              <Rate
                onChange={props.onChangeRating}
                defaultValue={props.el.rating}
                style={{ color: "#A77EE9" }}
              />
            </S.StarBox>
          </S.CommentAccountBox>
          <S.CommentContentsBox>
            <S.CommentContentsArea
              maxLength={100}
              defaultValue={props.el?.contents}
              onChange={props.onChangeContents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <S.CommentSettingsBox>
              <S.CommentTextLength>{props.contents.length}/100</S.CommentTextLength>
              <S.CommentWriteButton onClick={props.onClickCommentUpdate}>
                수정하기
              </S.CommentWriteButton>
            </S.CommentSettingsBox>
          </S.CommentContentsBox>
        </div>
      )}
      {props.deleteCommentModalVisible && (
        <Modal
          title={"비밀번호"}
          visible={true}
          onOk={props.commentDeleteOK}
          onCancel={props.commentDeleteCancel}
        >
          <S.ModalInput
            type={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            onChange={props.onChangeDeleteCommentPassword}
          />
        </Modal>
      )}
    </S.CommentColumnBox>
  );
};

export default BoardCommentListUI;
