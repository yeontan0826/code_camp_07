import { useState } from 'react';
import * as S from '../../../styles/state-login'

const Main = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onLogin = () => {
        if(email === "") {
            setEmailError("이메일 주소를 입력해주세요.")
        } else if(!email.includes("@")) {
            setEmailError("올바른 이메일을 입력해주세요.")
        } else {
            setEmailError("")
        }

        if(password === "") {
            setPasswordError("비밀번호를 입력해주세요.")
        } else if(password.length < 8) {
            setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
        } else {
            setPasswordError("")
        }
    }

    return (
        <S.Wrapper>
            <S.Header>
                <img src='../../image/02-state-login/img-logo.svg'/>
                <S.LogoTitle>잇츠로드</S.LogoTitle>
            </S.Header>
            <S.Body>
                <S.InputWrap>
                    <S.InputInnerBox>
                        <S.InputText type={"email"} onChange={onChangeEmail}/>
                        <img src='../../image/02-state-login/ic-delete.svg' style={{cursor:"pointer"}}/>
                    </S.InputInnerBox>
                </S.InputWrap>
                <S.ErrorText>{emailError}</S.ErrorText>
                <S.InputWrap>
                    <S.InputInnerBox>
                        <S.InputText type={"password"} onChange={onChangePassword}/>
                        <img src='../../image/02-state-login/ic-delete.svg' style={{cursor:"pointer"}}/>
                    </S.InputInnerBox>
                </S.InputWrap>
                <S.ErrorText>{passwordError}</S.ErrorText>
                <S.LoginButton onClick={onLogin}>로그인</S.LoginButton>
                <S.OptionWrap>
                    <S.OptionText>이메일 찾기</S.OptionText>
                    <S.OptionText>l</S.OptionText>
                    <S.OptionText>비밀번호 찾기</S.OptionText>
                    <S.OptionText>l</S.OptionText>
                    <S.OptionText>회원가입</S.OptionText>
                </S.OptionWrap>
                <S.KakaoWrap>
                    <img src='../../image/02-state-login/ic-kakao.svg' />
                    <S.KakaoTitle>카카오톡으로 로그인</S.KakaoTitle>
                </S.KakaoWrap>
            </S.Body>
        </S.Wrapper>
    )
}

export default Main;