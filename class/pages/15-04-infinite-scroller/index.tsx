import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int){
        fetchBoards(page: $page){
            _id
            writer
            title
            contents
        }
    }
`

const MyRow = styled.div`
    display: flex;
    height: 50px;
    border-bottom: 1px solid black;
    padding: 5px 10px;
`

const MyColumn = styled.div`
    width: 25%;
`

export default function MapBoardPage(){
    const { data, fetchMore } = useQuery(FETCH_BOARDS)

    const loadFunc = () => {
        if(!data) return;

        fetchMore({
            variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1},
            updateQuery: (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult?.fetchBoards) 
                    return { fetchBoards: [...prev.fetchBoards]}

                return { fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards] }
            }
        })
    }

    return (
        <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true} useWindow={true}>
            {data?.fetchBoards.map((el: any, index: any) => (
                <MyRow key={el._id}>
                    <MyColumn>{index + 1}</MyColumn>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title}</MyColumn>
                </MyRow>
            ))}
        </InfiniteScroll>
    )

}