import { useState } from "react"
import { gql, useMutation } from "@apollo/client"

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

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    
    const [callGraphql] = useMutation(CREATE_BOARD)

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    const onClickGraphqlApi = async () => {
        const result = await callGraphql({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result.data)
    }

    return (
        <div>
            작성자: <input type={"text"} onChange={onChangeWriter}/><br/>
            제목: <input type={"text"} onChange={onChangeTitle}/><br/>
            내용: <input type={"text"} onChange={onChangeContents}/><br/>
            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    )
}

export default GraphqlMutationPage