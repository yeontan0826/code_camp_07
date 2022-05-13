import { useState } from "react"
import { gql, useMutation } from '@apollo/client'

const CREATE_BOARD = gql `
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`

const GraphqlMutationPage = () => {
    
    const [mWriter, setWriter] = useState("")
    const [mTitle, setTitle] = useState("")
    const [mContents, setContents] = useState("")

    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)


    const onClickGraphqlApi = async () => {
        const result = await callGraphql({
            variables: {
                writer: mWriter,
                title: mTitle,
                contents: mContents
            }
        })
        
        console.log(result)
        setData(result.data.createBoard.message)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <div>
            작성자: <input type={"text"} placeholder={"작성자"} onChange={onChangeWriter}/><br/>
            제목: <input type={"text"} placeholder={"제목"} onChange={onChangeTitle}/><br/>
            내용: <input type={"text"} placeholder={"내용"} onChange={onChangeContents}/><br/>
            <div>{data}</div>
            <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
        </div>
    )
}

export default GraphqlMutationPage