import { useState } from "react"
import { useMutation } from '@apollo/client'
import { useRouter } from "next/router"
import BoardReadUI from "./BoardRead.presenter"
import { CREATE_BOARD } from './BoardRead.queries'

const BoardRead = () => {
    const router = useRouter()
    
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [callGraphql] = useMutation(CREATE_BOARD)

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        onChangeButtonDisabled()
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        onChangeButtonDisabled()
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        onChangeButtonDisabled()
    }

    const onChangeButtonDisabled = () => {
        if(writer && title && contents) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    const onClickGraphqlApi = async () => {
        try {
            if(writer && title && contents) {
                const result = await callGraphql({
                    variables: {
                        writer,
                        title,
                        contents
                    }
                })
                router.push(`./05-06-dynamic-routed-board/${result.data.createBoard.number}`)
                
                console.log(result)
            } else {
                alert("에이~")
            }
        } catch(error) {
            console.error(`!!!!!   에러발생   !!!!!\n${error}`)
        }
    }

    return(
        <BoardReadUI 
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickGraphqlApi={onClickGraphqlApi}
            onChangeButtonDisabled={buttonDisabled}
        />
    )
}

export default BoardRead