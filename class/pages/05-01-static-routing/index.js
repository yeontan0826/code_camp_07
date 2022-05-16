/*******************************************
 * 버튼을 누르면 05-02-static-routed 페이지로 이동
********************************************/

import { useRouter } from "next/router"

const staticRoutingPage = () => {

    const router = useRouter()

    const onClickMove = () => {
        router.push("./05-02-static-routed")
    }

    return <button onClick={onClickMove}>페이지 이동하기</button>
}

export default staticRoutingPage