import styled from "@emotion/styled";

export const CommentWriteBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const CommentInput = styled.textarea`
    width: 100%;
    height: 100px;
    background-color: #e9e9e9;
    border: none;
    outline: none;
    padding: 10px;
    resize: none;
    margin-top: 25px;
`;

export const CommentWriteButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #ffe004;
    border: none;
    margin-top: 10px;
    font-size: 17px;
    padding: 0 8px;
    cursor: pointer;
`;
