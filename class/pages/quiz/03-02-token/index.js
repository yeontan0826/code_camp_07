import { useState } from 'react';

export default function Token() {

    const [token, setToken] = useState("000000")

    function createToken() {
        let randomToken = String(Math.floor(Math.random() * 1000000)).padStart(6,'0')
        setToken(randomToken)
    }

    return (
        <div>
            <div>{token}</div>
            <button onClick={createToken}>인증번호전송</button>
        </div>        
    )
}