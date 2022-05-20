import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container"
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

const BoardEditPage = () => {

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })

    return <BoardWrite isEdit={true} boardData={data} />
}

export default BoardEditPage