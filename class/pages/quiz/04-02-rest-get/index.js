import axios from "axios"

const RestGetData = () => {

    const handleClick = async () => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result.data)
    }

    return (
        <div>
            <button onClick={handleClick}>REST-API 요청하기</button>
        </div>
    )
}

export default RestGetData