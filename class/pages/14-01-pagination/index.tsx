import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'

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
`

const MyColumn = styled.div`
    width: 200px;
`

const PageNum = styled.span`
    padding: 0 4px;
    margin: 0 3px;
    text-align: center;
    border: 1px solid black;
    cursor: pointer;
`

export default function MapBoardPage(){
    // refetch를 통해 mutation을 실행하고 refetch를 실행하는게 아니라 원할때 바로 refetch를 실행할 수 있게 해줌
    const { data, refetch } = useQuery(FETCH_BOARDS)

    const onClickPage = (event: any) => {
        // 기존에 FETCH_BOARDS의 variables에 page 값을 넘겨줬었는데 그럴 필요 없이 refetch함수 안에 넣으면 됨 (page는 graphql에서 Int형으로 받음)
        refetch({page: Number(event.target.id)})
    }

    return (
        <>
            <div>
                {data?.fetchBoards.map((el: any) => (
                    <MyRow key={el._id}>
                        <MyColumn>{el.writer}</MyColumn>
                        <MyColumn>{el.title}</MyColumn>
                    </MyRow>
                ))}

                {new Array(10).fill(1).map((_, index) => (
                    <PageNum key={index + 1} id={String(index + 1)} onClick={onClickPage}> {index + 1} </PageNum>
                ))}

                {/* {[1,1,1,1,1,1,1,1,1,1].map((_, index) => (
                    <PageNum key={index + 1} id={String(index + 1)} onClick={onClickPage}> {index + 1} </PageNum>
                ))} */}

                {/* {[1,2,3,4,5,6,7,8,9,10].map(el => (
                    <PageNum key={el} id={String(el)} onClick={onClickPage}> {el} </PageNum>
                ))} */}

                {/* 아래의 페이지 넘버 뿌려주는건 비효율적 */}
                {/* <span id='1' onClick={onClickPage}> 1 </span>
                <span id='2' onClick={onClickPage}> 2 </span>
                <span id='3' onClick={onClickPage}> 3 </span> */}
            </div>
        </>
    )

}