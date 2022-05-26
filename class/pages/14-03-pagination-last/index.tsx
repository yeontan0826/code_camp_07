import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import { useState } from 'react'

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

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
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
    const { data, refetch } = useQuery(FETCH_BOARDS)    // refetch를 통해 mutation을 실행하고 refetch를 실행하는게 아니라 원할때 바로 refetch를 실행할 수 있게 해줌
    const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)

    const [startPage, setStartPage] = useState(1)   // 1~10, 11~20, 21~30, ... 페이지 시작 점 기준
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)


    const onClickPage = (event: any) => {
        // 기존에 FETCH_BOARDS의 variables에 page 값을 넘겨줬었는데 그럴 필요 없이 refetch함수 안에 넣으면 됨 (page는 graphql에서 Int형으로 받음)
        refetch({page: Number(event.target.id)})
    }

    const onClickPrevPage = () => {
        if(startPage !== 1) {
            setStartPage(prev => prev - 10)
            refetch({page: startPage - 10})
        }
    }

    const onClickNextPage = () => {
        /*
        1. 마지막 페이지 계산
        2. 계산된 마지막 페이지가 startPage + 10 보다 클때만 이동 허락
        */
        if(startPage + 10 <= lastPage) {
            setStartPage(prev => prev + 10)
            refetch({page: startPage + 10})
        }
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

                <PageNum onClick={onClickPrevPage}>&lt;</PageNum>
                {new Array(10).fill(1).map((_, index) => 
                    index + startPage <= lastPage && (
                        <PageNum
                            key={index + startPage}
                            id={String(index + startPage)}
                            onClick={onClickPage}
                        >
                            {index + startPage}
                        </PageNum>
                    )
                )}
                <PageNum onClick={onClickNextPage}>&gt;</PageNum>

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