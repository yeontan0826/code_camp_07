import BoardWriteUI from "./BoardWrite.presenter"
import { useRouter } from "next/router"

const BoardWrite = () => {
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("./05-06-dynamic-routed-board/4")
    }

    const onClickMove2 = () => {
        router.push("./05-06-dynamic-routed-board/5")
    }

    const onClickMove3 = () => {
        router.push("./05-06-dynamic-routed-board/7")
    }

    return(
        <BoardWriteUI 
            onClickMove1={onClickMove1}
            onClickMove2={onClickMove2}
            onClickMove3={onClickMove3}
        />
    )
}

export default BoardWrite