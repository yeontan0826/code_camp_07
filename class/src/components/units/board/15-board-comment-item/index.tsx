import styled from '@emotion/styled'
import { useState } from 'react';

interface BoardCommentItemProps {
    data?: any;
    el: any;
}

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

const BoardCommentItem = (props: BoardCommentItemProps) => {

    const [isEdit, setIsEdit] = useState(false)

    const onClickEdit = () => {
        setIsEdit(prev => !prev);
    }

    return (
        <div>
            {isEdit || (
                <MyRow key={props.el._id}>
                    <MyColumn>{props.el.writer}</MyColumn>
                    <MyColumn>{props.el.title}</MyColumn>
                    <button onClick={onClickEdit}>수정하기</button>
                </MyRow>
            )}
            {isEdit && (
                <EditRow>
                    수정하기 화면입니다!
                    <button onClick={onClickEdit}>완료</button>
                </EditRow>
            )}
        </div>
    )
}

export default BoardCommentItem