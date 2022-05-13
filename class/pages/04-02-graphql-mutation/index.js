import { useState } from "react"
import { gql, useMutation } from '@apollo/client'

const CREATE_BOARD = gql `
    mutation {
        createBoard(
            writer: "류연찬"
            title: "배고픕니다"
            contents: "정말 배고픕니다"
        ) {
            _id
            number
            message
        }
    }
`

const GraphqlMutationPage = () => {

    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1");    => rest-api 방식
        const result = await callGraphql()
        
        console.log(result)
        setData(result.data.createBoard.message)
    }

    return (
        <div>
            <div>{data}</div>
            <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
        </div>
    )
}

export default GraphqlMutationPage