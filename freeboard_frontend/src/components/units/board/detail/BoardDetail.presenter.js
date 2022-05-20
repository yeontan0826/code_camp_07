import * as S from './BoardDetail.style'

const BoardDetailUI = (props) => {
    return(
        <S.Wrapper>
            <S.Header>
            </S.Header>
            <S.Container>
                <S.Box>
                    <S.BoardProfileBox>
                        <S.BoardProfileInnerBox>
                            <S.ProfileImg src='../../image/detail/ic_profile.svg'/>
                            <S.ProfileBox>
                                <S.BoardWriter>{props.data ? props.data.fetchBoard.writer : "Loading"}</S.BoardWriter>
                                <S.BoardCreatedAt>Date : {props.data ? props.data.fetchBoard.createdAt : "Loading"}</S.BoardCreatedAt>
                            </S.ProfileBox>
                        </S.BoardProfileInnerBox>
                        <S.BoardProfileInnerBox>
                            <S.FunctionImg src='../../image/detail/ic_link.svg' title='링크'/>
                            <S.FunctionImg src='../../image/detail/ic_location.svg' title='지도'/>
                        </S.BoardProfileInnerBox>
                    </S.BoardProfileBox>
                    <S.Main>
                        <S.ContentsTitle>{props.data ? props.data.fetchBoard.title : "Loading"}</S.ContentsTitle>
                        <S.ContentsImg src='../../image/detail/ic_contents_img.svg'/>
                        <S.Contents>{props.data ? props.data.fetchBoard.contents : "Loading"}</S.Contents>
                        <S.YoutubeBox>
                            <S.YoutubeImg src='../../image/detail/ic_youtube.svg'/>
                        </S.YoutubeBox>
                        <S.ThumbBox>
                            <S.LikeBox>
                                <S.Thumb src='../../image/detail/ic_like.svg'/>
                                <S.ThumbCount>{props.data ? props.data.fetchBoard.likeCount : "Loading"}</S.ThumbCount>
                            </S.LikeBox>
                            <S.DisLikeBox>
                            <S.Thumb src='../../image/detail/ic_dislike.svg'/>
                                <S.ThumbCount>{props.data ? props.data.fetchBoard.dislikeCount : "Loading"}</S.ThumbCount>
                            </S.DisLikeBox>
                        </S.ThumbBox>
                    </S.Main>
                </S.Box>
                <S.PageSettingsBox>
                    <S.PageSettingsButton onClick={props.onClickMoveToList}>목록으로</S.PageSettingsButton>
                    <S.PageSettingsButton onClick={props.onClickMoveToBoardEdit}>수정하기</S.PageSettingsButton>
                    <S.PageSettingsButton onClick={props.onClickDelete}>삭제하기</S.PageSettingsButton>
                </S.PageSettingsBox>
                <S.CommentWrapper>
                    <S.CommentTitleBox>
                        <img src='../../image/detail/ic_comment.svg'/>
                        <S.CommentTitle>댓글</S.CommentTitle>
                    </S.CommentTitleBox>
                    <S.CommentAccountBox>
                        <S.CommentAccountInput placeholder='작성자'/>
                        <S.CommentAccountInput placeholder='비밀번호'/>
                        <S.StarBox>
                            <img src='../../image/detail/ic_star_gray.svg'/>
                            <img src='../../image/detail/ic_star_gray.svg'/>
                            <img src='../../image/detail/ic_star_gray.svg'/>
                            <img src='../../image/detail/ic_star_gray.svg'/>
                            <img src='../../image/detail/ic_star_gray.svg'/>
                        </S.StarBox>
                    </S.CommentAccountBox>
                    <S.CommentContentsBox>
                        <S.CommentContentsArea placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'/>
                        <S.CommentSettingsBox>
                            <S.CommentTextLength>0/100</S.CommentTextLength>
                            <S.CommentWriteButton>등록하기</S.CommentWriteButton>
                        </S.CommentSettingsBox>
                    </S.CommentContentsBox>
                    <S.CommentListBox>
                        <S.CommentItemBox>
                            <S.CommentProfileImgBox>
                                <S.CommentProfileImg src='../../image/detail/ic_profile.svg'/>
                            </S.CommentProfileImgBox>
                            <S.CommentInfoBox>
                                <S.CommentWriterStarBox>
                                    <S.CommentWriter>노원두</S.CommentWriter>
                                    <S.CommentStarBox>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_gray.svg'/>
                                        <img src='../../image/detail/ic_star_gray.svg'/>
                                    </S.CommentStarBox>
                                </S.CommentWriterStarBox>
                                <S.CommentReplyContent>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</S.CommentReplyContent>
                                <S.CommentDate>2022.05.13</S.CommentDate>
                            </S.CommentInfoBox>
                            <S.CommentReplySettingsBox>
                                <S.CommentReplaySettingsImg src='../../image/detail/ic_replay_edit.svg'/>
                                <S.CommentReplaySettingsImg src='../../image/detail/ic_replay_delete.svg'/>
                            </S.CommentReplySettingsBox>
                        </S.CommentItemBox>
                        <S.CommentItemBox>
                            <S.CommentProfileImgBox>
                                <S.CommentProfileImg src='../../image/detail/ic_profile.svg'/>
                            </S.CommentProfileImgBox>
                            <S.CommentInfoBox>
                                <S.CommentWriterStarBox>
                                    <S.CommentWriter>땅찌</S.CommentWriter>
                                    <S.CommentStarBox>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_gray.svg'/>
                                        <img src='../../image/detail/ic_star_gray.svg'/>
                                    </S.CommentStarBox>
                                </S.CommentWriterStarBox>
                                <S.CommentReplyContent>진짜 좋네요~ 감사합니다~!</S.CommentReplyContent>
                                <S.CommentDate>2022.05.13</S.CommentDate>
                            </S.CommentInfoBox>
                            <S.CommentReplySettingsBox>
                                <S.CommentReplaySettingsImg src='../../image/detail/ic_replay_edit.svg'/>
                                <S.CommentReplaySettingsImg src='../../image/detail/ic_replay_delete.svg'/>
                            </S.CommentReplySettingsBox>
                        </S.CommentItemBox>
                        <S.CommentItemBox>
                            <S.CommentProfileImgBox>
                                <S.CommentProfileImg src='../../image/detail/ic_profile.svg'/>
                            </S.CommentProfileImgBox>
                            <S.CommentInfoBox>
                                <S.CommentWriterStarBox>
                                    <S.CommentWriter>안우엽</S.CommentWriter>
                                    <S.CommentStarBox>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_purple.svg'/>
                                        <img src='../../image/detail/ic_star_gray.svg'/>
                                        <img src='../../image/detail/ic_star_gray.svg'/>
                                    </S.CommentStarBox>
                                </S.CommentWriterStarBox>
                                <S.CommentReplyContent>앞으로도 좋은 정보 부탁드립니다~!</S.CommentReplyContent>
                                <S.CommentDate>2022.05.13</S.CommentDate>
                            </S.CommentInfoBox>
                            <S.CommentReplySettingsBox>
                                <S.CommentReplaySettingsImg src='../../image/detail/ic_replay_edit.svg'/>
                                <S.CommentReplaySettingsImg src='../../image/detail/ic_replay_delete.svg'/>
                            </S.CommentReplySettingsBox>
                        </S.CommentItemBox>
                    </S.CommentListBox>
                </S.CommentWrapper>
            </S.Container>
        </S.Wrapper>
    )
}

export default BoardDetailUI