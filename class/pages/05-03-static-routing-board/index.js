import { useRouter } from "next/router"

const staticRoutingPage = () => {

    const router = useRouter()

    const onClickMove1 = () => {
        router.push("./05-04-static-routed-board/4")
    }

    const onClickMove2 = () => {
        router.push("./05-04-static-routed-board/5")
    }

    const onClickMove3 = () => {
        router.push("./05-04-static-routed-board/7")
    }

    return (
        // <></> -> fragment
        <>
            <button onClick={onClickMove1}>4번 게시글 이동하기</button>
            <button onClick={onClickMove2}>5번 게시글 이동하기</button>
            <button onClick={onClickMove3}>7번 게시글 이동하기</button>
        </>
    )
}

export default staticRoutingPage