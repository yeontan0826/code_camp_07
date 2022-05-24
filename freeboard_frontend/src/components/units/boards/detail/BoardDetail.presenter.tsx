import ReactPlayer from "react-player";
import BoardComment from "../comment/BoardComment.container";
import * as S from "./BoardDetail.style";
import { IBoardDetailUIProps } from "./BoardDetail.types";

const BoardDetailUI = (props: IBoardDetailUIProps) => {
  return (
    <S.Wrapper>
      <S.Header></S.Header>
      <S.Container>
        <S.Box>
          <S.BoardProfileBox>
            <S.BoardProfileInnerBox>
              <S.ProfileImg src="../../image/detail/ic_profile.svg" />
              <S.ProfileBox>
                <S.BoardWriter>
                  {props.data ? props.data.fetchBoard.writer : "Loading"}
                </S.BoardWriter>
                <S.BoardCreatedAt>
                  Date :{" "}
                  {props.data ? props.data.fetchBoard.createdAt : "Loading"}
                </S.BoardCreatedAt>
              </S.ProfileBox>
            </S.BoardProfileInnerBox>
            <S.BoardProfileInnerBox>
              <S.FunctionImg
                src="../../image/detail/ic_link.svg"
                title="링크"
              />
              <S.FunctionImg
                src="../../image/detail/ic_location.svg"
                title="지도"
              />
            </S.BoardProfileInnerBox>
          </S.BoardProfileBox>
          <S.Main>
            <S.ContentsTitle>
              {props.data ? props.data.fetchBoard.title : "Loading"}
            </S.ContentsTitle>
            <S.ContentsImg src="../../image/detail/ic_contents_img.svg" />
            <S.Contents>
              {props.data ? props.data.fetchBoard.contents : "Loading"}
            </S.Contents>
            {props.data?.youtubeUrl && (
              <S.YoutubeBox>
                <ReactPlayer
                  url={props.data?.fetchBoard.youtubeUrl}
                  controls={true}
                />
              </S.YoutubeBox>
            )}
            <S.ThumbBox>
              <S.LikeBox>
                <S.Thumb
                  onClick={props.onClickLike}
                  src="../../image/detail/ic_like.svg"
                />
                <S.ThumbCount>
                  {props.data ? props.data.fetchBoard.likeCount : "Loading"}
                </S.ThumbCount>
              </S.LikeBox>
              <S.DisLikeBox>
                <S.Thumb
                  onClick={props.onClickDislike}
                  src="../../image/detail/ic_dislike.svg"
                />
                <S.ThumbCount>
                  {props.data ? props.data.fetchBoard.dislikeCount : "Loading"}
                </S.ThumbCount>
              </S.DisLikeBox>
            </S.ThumbBox>
          </S.Main>
        </S.Box>
        <S.PageSettingsBox>
          <S.PageSettingsButton onClick={props.onClickMoveToList}>
            목록으로
          </S.PageSettingsButton>
          <S.PageSettingsButton onClick={props.onClickMoveToBoardEdit}>
            수정하기
          </S.PageSettingsButton>
          <S.PageSettingsButton onClick={props.onClickDelete}>
            삭제하기
          </S.PageSettingsButton>
        </S.PageSettingsBox>
        <BoardComment />
      </S.Container>
    </S.Wrapper>
  );
};

export default BoardDetailUI;
