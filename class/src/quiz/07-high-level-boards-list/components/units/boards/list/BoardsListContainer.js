import { useQuery } from "@apollo/client"
import BoardsListUI from "./BoardsListPresenter"
import { FETCH_BOARDS } from './BoardsListQueries'

const BoardsList = () => {

    const {data} = useQuery(FETCH_BOARDS)

    return(
        <BoardsListUI data={data} />
    )
}

export default BoardsList