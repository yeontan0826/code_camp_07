import axios from "axios"
import { useEffect, useState } from "react"

const OpenapiUseEffectPage = () => {
    const [dogUrl, setDogUrl] = useState("")

    useEffect(() => {
        const fetchDog = async () => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            setDogUrl(result.data.message)
        }
        fetchDog()
    }, [])

    return(
        <div>
            {dogUrl ? (<img src={dogUrl}/>) : (<span>이미지 로딩중입니다!!</span>)}
        </div>
    )
}

export default OpenapiUseEffectPage