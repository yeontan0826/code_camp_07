import styled from "@emotion/styled";

export const Wrapper = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

export const Container = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const Logo = styled.img`
    height: 26px;
    cursor: pointer;
`;

export const SellContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const SellIcon = styled.img`
    height: 25px;
`;

export const SellSpan = styled.span`
    font-size: 16px;
    font-weight: bold;
`;
