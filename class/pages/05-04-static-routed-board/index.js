import { gql, useQuery } from "@apollo/client" 

const FETCH_BOARD = gql`
    query {
        fetchBoard(number: 7) {
            number,
            writer,
            title,
            contents,
        }
    }
`

const staticRoutedPage = () => {

    const {data} = useQuery(FETCH_BOARD)

    console.log(data)

    return <div>7번 페이지 이동이 완료되었습니다!</div>
}

export default staticRoutedPage