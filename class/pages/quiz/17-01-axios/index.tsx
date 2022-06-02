import axios from "axios"
import { useEffect, useState } from "react"

const AxiosPage = () => {
    const [dogUrl, setDogUrl] = useState("")

    const fetchDog = async () => {
        const result = await axios.get("https://dog.ceo/api/breeds/image/random")
        setDogUrl(result.data.message)
    }

    useEffect(() => {
        fetchDog()
    }, [])

    const onButtonClick = () => {
        fetchDog()    
    }

    return(
        <div>
            <button onClick={onButtonClick}>이미지 변경</button><br/>
            {dogUrl ? (<img src={dogUrl}/>) : (<span>이미지 로딩중입니다!!</span>)}
        </div>
    )
}

export default AxiosPage