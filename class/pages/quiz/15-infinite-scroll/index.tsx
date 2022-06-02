import styled from "@emotion/styled"
import { gql, useQuery } from "@apollo/client"
import InfiniteScroll from "react-infinite-scroller"

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
        }
    }
`

const Wrapper = styled.div`
    overflow: auto;
    height: 500px;
    border: 1px solid black;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    line-height: 40px;
`

const item = styled.div`
    border: 1px solid red;
    padding-left: 10px;
`
const ItemWriter = styled(item)`
    width: 25%;
`

const ItemTitle = styled(item)`
    width: 75%;
`

const InfiniteScrollPage = () => {

    const {data, fetchMore} = useQuery(FETCH_BOARDS)

    const loadFunc = () => {
        if(!data) return;

        fetchMore({
            variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1},
            updateQuery: (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult?.fetchBoards) 
                    return { fetchBoards: [...prev.fetchBoards] }
                
                return { fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards]}
            }
        })
    }

    return (
        <Wrapper>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true}
                useWindow={false}
            >
                {data?.fetchBoards.map((el: any) => (
                    <Row key={el._id}>
                        <ItemWriter>{el.writer}</ItemWriter>
                        <ItemTitle>{el.title}</ItemTitle>
                    </Row>
                ))}
            </InfiniteScroll>
        </Wrapper>
    )
}

export default InfiniteScrollPage