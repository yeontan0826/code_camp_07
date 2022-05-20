// 스크립트 컴포넌트
import { useState } from "react"
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from "next/router"

const BoardWrite = (props) => {

    const router = useRouter()
    
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD) // 등록하기
    const [updateBoard] = useMutation(UPDATE_BOARD) // 수정하기

    const onClickGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1")
        const result = await callGraphql({
            variables: {
                writer,
                title,
                contents
            }
        })

        console.log(result)
        setData(result.data.createBoard.message)
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer,
                title,
                contents
            }
        })
        router.push(`/08-05-boards/${result.data.updateBoard.number}`)
        // router.push(`/08-05-boards/${router.query.number}`) => 이것도 가능!!
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
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickGraphqlApi={onClickGraphqlApi}
            onClickUpdate={onClickUpdate}
            data={data}
            isEdit={props.isEdit}
        />
    )
}

export default BoardWrite