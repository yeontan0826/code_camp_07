import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: space-between;
    background: url('../../image/02-state-login/bg-img.png') no-repeat;
    background-size: cover;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 224px;
`

export const Body = styled.div`
    display: flex;
    margin: 0 51px;
    flex-direction: column;
    margin-bottom: 83px;
`

export const LogoTitle = styled.span`
    font-size: 60px;
    color: white;
    letter-spacing: 2px;
    font-weight: 500;
`

export const InputWrap = styled.div`
    height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    margin-top: 25px;
`

export const InputInnerBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const InputText = styled.input`
    width: 100%;
    color: white;
    font-size: 28px;
    font-weight: normal;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
`

export const ErrorText = styled.span`
    color: #ff1b6d;
    font-size: 18px;
    margin-top: 10px;
`

export const LoginButton = styled.button`
    height: 76px;
    background-color: rgba(255, 27, 109, 0.6);
    border-radius: 38px;
    border: none;
    color: white;
    font-size: 26px;
    font-weight: bold;
    line-height: 21px;
    letter-spacing: 0;
    margin-top: 20px;
    cursor: pointer;
`

export const OptionWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 44px;
`

export const OptionText = styled.span`
    color: white;
    font-size: 20px;
    line-height: 20px;
`

export const KakaoWrap = styled.div`
    height: 76px;
    border: 2px solid rgba(255, 255, 0, 0.6);
    border-radius: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 61px;
    cursor: pointer;
`

export const KakaoTitle = styled.span`
    font-size: 26px;
    line-height: 26px;
    color: #fae100;
    margin-left: 16px;
`
