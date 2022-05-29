import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const CommentTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: left;
`;

export const CommentTitle = styled.span`
  font-size: 17px;
  margin-left: 10px;
`;

export const CommentAccountBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  align-items: center;
`;

export const CommentAccountInput = styled.input`
  width: 160px;
  background-color: white;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
  padding: 12px 15px;
  outline: none;
`;

export const StarBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border: 1px solid #bdbdbd;
`;

export const CommentContentsArea = styled.input`
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
`;

export const CommentSettingsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
`;

export const CommentTextLength = styled.span`
  margin-left: 20px;
  color: #bdbdbd;
  font-size: 16px;
`;

export const CommentWriteButton = styled.button`
  border: none;
  background-color: black;
  height: 100%;
  padding: 0 15px;
  color: white;
  cursor: pointer;
`;

export const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const CommentColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentItemBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
`;

export const CommentProfileImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const CommentProfileImg = styled.img`
  width: 45px;
`;

export const CommentInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const CommentWriterStarBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentWriter = styled.span`
  font-size: 18px;
`;

export const CommentStarBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

export const CommentReplyContent = styled.div`
  margin-top: 8px;
  font-size: 15px;
`;

export const CommentDate = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  margin-top: 16px;
`;

export const CommentReplySettingsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CommentReplaySettingsImg = styled.img`
  width: 25px;
  cursor: pointer;
`;

export const ModalInput = styled.input`
  width: 200px;
  height: 35px;
  padding-left: 10px;
  outline: none;
  border: 1px solid #eeeeee;
`;
