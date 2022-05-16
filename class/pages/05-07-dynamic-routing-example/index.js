import { useState } from "react"
import { gql, useMutation } from '@apollo/client'
import { useRouter } from "next/router"

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

    const router = useRouter()
    
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
        try {
            const result = await callGraphql({
                variables: {
                    writer,
                    title,
                    contents
                }
            })
            router.push(`./05-06-dynamic-routed-board/${result.data.createBoard.number}`)
            
            console.log(result)
        } catch(error) {
            console.error(`!!!!!   에러발생   !!!!!\n${error}`)
        }
    }
    
    return (
        <div>
            작성자: <input type={"text"} placeholder={"작성자"} onChange={onChangeWriter}/><br/>
            제목: <input type={"text"} placeholder={"제목"} onChange={onChangeTitle}/><br/>
            내용: <input type={"text"} placeholder={"내용"} onChange={onChangeContents}/><br/>
            <button onClick={onClickGraphqlApi}>게시글 등록하기</button>
        </div>
    )
}

export default GraphqlMutationPage