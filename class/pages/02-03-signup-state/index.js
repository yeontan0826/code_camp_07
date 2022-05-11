import { Wrapper, Box, Input, RegisterButton } from '../../styles/signup-state';
import { useState } from 'react';

export default function SignupStatePage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("")

    function onChangeEmail(event){ 
        // event.target => 태그 전체를 의미, 예) <input type="text"/>
        // event.target.value => 태그에 입력된 값
        setEmail(event.target.value)
    }

    function onChangePassword(event){ 
        setPassword(event.target.value)
    }

    function onClickSignup(){
        if(email === "") {
            setEmailError("이메일을 입력해 주세요")
        } else if(!email.includes("@")) {
            setEmailError("올바른 이메일을 입력해 주세요")
        } else if(password === "") {
            setEmailError("비밀번호를 입력해 주세요")
        } else {
            alert(`이메일 : ${email}\n비밀번호 : ${password}\n\n회원가입을 축하합니다!`)
        }
    }

    return (
        <Wrapper>
            <Box>
                이메일: <Input type="text" onChange={onChangeEmail} />
            </Box>
            <br />
            <Box>
                비밀번호: <Input type="password" onChange={onChangePassword} />
            </Box>
            <br />
            <div>{emailError}</div>
            <RegisterButton onClick={onClickSignup}>회원가입</RegisterButton>
        </Wrapper>
    )
}