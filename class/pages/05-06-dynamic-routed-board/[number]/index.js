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

const staticRoutedPage = () => {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })

    console.log(data)

    return (
        <div>
            <div>{router.query.number}번 게시글 이동이 완료되었습니다</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data ? data.fetchBoard.title : "불러오는중..."}</div>
            <div>내용: {data ? data.fetchBoard.contents : "불러오는중..."}</div>
        </div>
    )
}

export default staticRoutedPage