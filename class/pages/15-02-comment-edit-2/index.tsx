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

const Wrapper = styled.div`
    width: 600px;
`

const MyRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 7px;
    border-bottom: 1px solid black;
`

const MyColumn = styled.div`
    width: 25%;
`

const EditRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 7px;
    background-color: skyblue;
    border-bottom: 1px solid black;
`

const EditButton = styled.button`
    width: 70px;
    background-color: #b54fb5;
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 5px;
    cursor: pointer;
    transition: 0.5s;
    :hover {
        background-color: purple;
    }
`

export default function MapBoardPage(){
    const { data } = useQuery(FETCH_BOARDS)

    const [myIndex, setMyIndex] = useState([
        false, false, false, false, false, false, false, false, false, false // 10
    ])

    const onClickEdit = (event: any) => {
        // setMyIndex(Number(event.target.id))
        const aaa = [...myIndex]
        aaa[Number(event.target.id)] = !aaa[Number(event.target.id)]
        setMyIndex(aaa)
    }

    return (
        <Wrapper>
            {data?.fetchBoards.map((el: any, index: any) => (
                <div key={el._id}>
                    {myIndex[index] === false && (
                        <MyRow key={el._id}>
                            <MyColumn>{el.writer}</MyColumn>
                            <MyColumn>{el.title}</MyColumn>
                            <EditButton id={index} onClick={onClickEdit}>수정하기</EditButton>
                        </MyRow>
                    )}
                    {myIndex[index] === true && (
                        <EditRow>
                            수정하기 화면입니다!
                            <EditButton id={index} onClick={onClickEdit}>완료</EditButton>
                        </EditRow>
                    )}
                </div>
            ))}
        </Wrapper>
    )

}