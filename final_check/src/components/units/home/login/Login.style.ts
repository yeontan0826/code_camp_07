import styled from "@emotion/styled";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 100px;
    background-color: black;
`;

export const Logo = styled.img`
    height: 27px;
    cursor: pointer;
`;

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
`;

export const ContainerBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: auto;
    padding: 40px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 4px 4px 10px #e0e0e0;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    padding-bottom: 20px;
    gap: 15px;
    border-bottom: 1px solid #c9c9c9;
`;

export const TitleSpan = styled.span`
    font-size: 33px;
    font-weight: bold;
`;

export const SubTitleSpan = styled.span`
    font-size: 24px;
    font-weight: normal;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
`;

export const InputsBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 20px;
`;

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    gap: 10px;
`;

export const RegisterDescSpan = styled.span`
    color: #888888;
`;

export const RegisterSpan = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

export const LoggedInBox = styled.div`
    font-size: 18px;
    font-weight: 600;
`;
