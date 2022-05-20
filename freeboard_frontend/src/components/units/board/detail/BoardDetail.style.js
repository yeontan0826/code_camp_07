import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    width: 100%;
    height: 200px;
    background-color: gray;
    text-align: center;
    font-weight: bold;
`

export const Container = styled.div`
    margin: auto;
    padding: 50px 0;
`

export const Box = styled.div`
    width: 1000px;
    background-color: white;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 50px 80px;
`

export const BoardProfileBox = styled.div`
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #bdbdbd;
`

export const BoardProfileInnerBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`

export const ProfileImg = styled.img`
    width: 55px;
`

export const BoardWriter = styled.span`
    color: black;
    font-size: 20px;
`

export const BoardCreatedAt = styled.span`
    color: #828282;
    font-size: 14px;
`

export const FunctionImg = styled.img`
    width: 30px;
    margin-left: 12px;
    cursor: pointer;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`

export const ContentsTitle = styled.div`
    font-size: 30px;
    font-weight: 700;
`

export const ContentsImg = styled.img`
    width: 100%;
    margin-top: 30px;
`

export const Contents = styled.div`
    font-size: 18px;
    margin-top: 40px;
`

export const YoutubeBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
`

export const YoutubeImg = styled.img`
    width: 500px;
`

export const ThumbBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
`

export const LikeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #A77EE9;
`

export const DisLikeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    text-align: center;
    color: #828282;
`

export const Thumb = styled.img`
    width: 24px;
`

export const ThumbCount = styled.span`
    font-size: 18px;
    margin-top: 6px;
`

export const PageSettingsBox = styled.div`
    border-bottom: 1px solid #bdbdbd;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 60px 0;
`

export const PageSettingsButton = styled.button`
    margin: 10px;
    background-color: white;
    border: 1px solid #bdbdbd;
    padding: 12px 50px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    :hover {
        border: 1px solid #A77EE9;
        color: #A77EE9;
    }
`

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

export const CommentTitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: left;
`

export const CommentTitle = styled.span`
    font-size: 17px;
    margin-left: 10px;
`

export const CommentAccountBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 35px;
    align-items: center;
`

export const CommentAccountInput = styled.input`
    width: 160px;
    background-color: white;
    border: 1px solid #bdbdbd;
    margin-right: 20px;
    padding: 12px 15px;
    outline: none;
`

export const StarBox = styled.div`
    display: flex;
    flex-direction: row;
`

export const CommentContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    border: 1px solid #bdbdbd;
`

export const CommentContentsArea = styled.textarea`
    height: 100px;
    padding: 10px;
    font-size: 14px;
    outline: none;
    border: none;
    resize: none;
    border-bottom: 1px solid #f2f2f2;
    &::placeholder {
        color: #bdbdbd;
    }
`

export const CommentSettingsBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    height: 45px;
`

export const CommentTextLength = styled.span`
    margin-left: 20px;
    color: #bdbdbd;
    font-size: 16px;
`

export const CommentWriteButton = styled.button`
    border: none;
    background-color: black;
    height: 100%;
    padding: 0 15px;
    color: white;
    cursor: pointer;

`

export const CommentListBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const CommentItemBox = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #bdbdbd;
    padding: 20px 0;
`

export const CommentProfileImgBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

export const CommentProfileImg = styled.img`
    width: 45px;
`

export const CommentInfoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

export const CommentWriterStarBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const CommentWriter = styled.span`
    font-size: 18px;
`

export const CommentStarBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`

export const CommentReplyContent = styled.div`
    margin-top: 8px;
    font-size: 15px;
`

export const CommentDate = styled.span`
    color: #bdbdbd;
    font-size: 14px;
    margin-top: 16px;
`

export const CommentReplySettingsBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const CommentReplaySettingsImg = styled.img`
    width: 25px;
`