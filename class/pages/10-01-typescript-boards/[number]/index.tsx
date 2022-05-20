import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query ($number: Int) {
        fetchBoard(number: $number) {
            number,
            writer,
            title,
            contents,
        }
    }
`

const BoardPage = () => {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })

    const onClickMoveToEdit = () => {
        // router.push(`./${router.query.number}/edit`)
        router.push("/10-01-typescript-boards/" + router.query.number + "/edit")
    }

    return(
        <>
            <div>{router.query.number}번 게시글 이동이 완료되었습니다</div>
            <div>작성자: {data ? data.fetchBoard.writer : "불러오는중..."}</div>
            <div>제목: {data ? data.fetchBoard.title : "불러오는중..."}</div>
            <div>내용: {data ? data.fetchBoard.contents : "불러오는중..."}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}

export default BoardPage