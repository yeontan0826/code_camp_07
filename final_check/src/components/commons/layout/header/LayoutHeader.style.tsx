import styled from "@emotion/styled";

export const Wrapper = styled.div`
    height: 75px;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1100px;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 50px;
    font-size: 15px;
    font-weight: normal;
`;

export const Item = styled.span`
    cursor: pointer;
    :hover {
        color: purple;
    }
`;

export const BasketContainer = styled.div`
    display: flex;
    gap: 3px;
    align-items: center;
`;

export const BasketCountSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-size: 14px;
    text-align: center;
    border-radius: 10px;
    color: white;
    background-color: #ffe004;
`;

/* Is LoggedIn End */
export const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const UserName = styled.span`
    cursor: pointer;
`;

export const UserPriceSpan = styled.span`
    text-decoration: underline;
    margin-left: 10px;
`;

export const UserInfoSpan = styled.span`
    margin-left: 3px;
`;

export const UserPointCharge = styled.span`
    text-decoration: underline;
    margin-left: 20px;
    cursor: pointer;
`;
/* Is LoggedIn End */
