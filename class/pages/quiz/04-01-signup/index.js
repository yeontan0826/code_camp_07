import { useState } from 'react';

export default function Main() {

    const [email, setEmail] = useState("")
    const [pw1, setPw1] = useState("")
    const [pw2, setPw2] = useState("")
    
    const [error, setError] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePw1 = (event) => {
        setPw1(event.target.value)
    }

    const onChangePw2 = (event) => {
        setPw2(event.target.value)
    }

    const signUp = () => {
        if(email === "") {
            setError("이메일을 입력해 주세요")
        } else if(!email.includes("@")) {
            setError("유효한 이메일을 입력해 주세요")
        } else if(pw1 === "") {
            setError("비밀번호를 입력해 주세요")
        } else if(pw1 !== pw2) {
            setError("비밀번호가 일치하지 않습니다")
        } else {
            setError("")
        }
    }

    return (
        <div>
            <style>{`
                .errorCode {
                    color: red;
                }
            `}</style>
            
            이메일 <input type="email" onChange={onChangeEmail}/><br/>
            비밀번호 <input type="password" onChange={onChangePw1}/><br/>
            비밀번호확인 <input type="password" onChange={onChangePw2}/><br/>
            <div className='errorCode'>{error}</div><br/>
            <button onClick={signUp}>가입하기</button>
        </div>
    )
}