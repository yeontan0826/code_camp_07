import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: fixed;
    top: 150px;
    right: 25px;
    width: 120px;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: normal;
    margin: 10px 0;
`;

export const ProductImgBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 10px;
`;

export const ProductImg = styled.img`
    width: 100px;
    height: 100px;
`;
