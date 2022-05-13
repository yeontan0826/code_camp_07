import { useState } from 'react';
import axios from 'axios';

const RestGetPage = () => {

    const [title, setTitle] = useState("");

    const handleClick = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1");
        console.log(result);
        setTitle(result.data.title);
    }

    return(
        <div>
            <div>{title}</div>
            <button onClick={handleClick}>REST-API 요청하기</button>
        </div>
    )
}

export default RestGetPage