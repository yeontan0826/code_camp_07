import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: auto;
    border: 1px solid #555555;
    cursor: pointer;
`;

export const ItemImage = styled.img`
    height: 250px;
`;

export const ItemContents = styled.div`
    padding: 15px;
`;

export const ItemSubContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

export const ItemCreatedAt = styled.span`
    font-size: 12px;
    color: #a9a9a9;
    font-weight: normal;
`;
