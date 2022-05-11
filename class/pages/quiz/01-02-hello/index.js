import { useState } from 'react';

export default function Hello() {

    const [word, setWord] = useState("안녕하세요")

    const buttonClicked = () => { setWord("반갑습니다") }

    return (
        <div>
            <button onClick={buttonClicked}>{word}</button>
        </div>        
    )
}