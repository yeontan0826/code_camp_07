// 스크립트 컴포넌트
import { useState } from "react"
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'

const BoardWrite = () => {
    
    const [mWriter, setWriter] = useState("")
    const [mTitle, setTitle] = useState("")
    const [mContents, setContents] = useState("")

    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1")
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
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickGraphqlApi={onClickGraphqlApi}
            data={data}
        />
    )
}

export default BoardWrite