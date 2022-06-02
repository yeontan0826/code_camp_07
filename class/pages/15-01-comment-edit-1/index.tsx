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

const MyRow = styled.div`
    display: flex;
    height: 30px;
    border-bottom: 1px solid black;
`

const MyColumn = styled.div`
    width: 25%;
`

const EditRow = styled.div`
    height: 30px;
    line-height: 30px;
    background-color: skyblue;
`

export default function MapBoardPage(){
    const { data } = useQuery(FETCH_BOARDS)

    const [myIndex, setMyIndex] = useState(-1)

    const onClickEdit = (event: any) => {
        setMyIndex(Number(event.target.id))
    }

    return (
        <div>
            {data?.fetchBoards.map((el: any, index: any) => (
                <div key={el._id}>
                    {index !== myIndex && (
                        <MyRow key={el._id}>
                            <MyColumn>{el.writer}</MyColumn>
                            <MyColumn>{el.title}</MyColumn>
                            <button id={index} onClick={onClickEdit}>수정하기</button>
                        </MyRow>
                    )}
                    {index === myIndex && <EditRow>수정하기 화면입니다!</EditRow>}
                </div>
            ))}
        </div>
    )

}