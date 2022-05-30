import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
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
