import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid #e0e0e0;
`;

export const TopDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: gray;
`;

export const UserInfoDiv = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`;

export const UserName = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    gap: 10px;
    color: #bdbdbd;
`;

export const ContentsDiv = styled.div`
    font-size: 16px;
    font-weight: normal;
    margin-top: 10px;
`;

export const EditContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

export const CommentEdit = styled.textarea`
    width: 100%;
    height: 100px;
    background-color: #e9e9e9;
    border: none;
    outline: none;
    padding: 10px;
    resize: none;
    margin-top: 25px;
`;

export const EditButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: 10px;
    gap: 10px;
`;

export const editButton = styled.button`
    padding: 0 5px;
    border: none;
    cursor: pointer;
`;

export const EditCancelButton = styled(editButton)`
    background-color: white;
    border: 1px solid black;
`;

export const EditSubmitButton = styled(editButton)`
    background-color: #ffe004;
`;
