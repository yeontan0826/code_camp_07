import { useState } from 'react'
import * as S from './BoardsListStyle'

const BoardsListUI = (props) => {

    const [checkList, setCheckList] = useState([])
    console.log(checkList)

    const onClickCheckAll = () => {
        if(checkList.length !== props.data?.fetchBoards.length) {
            setCheckList(props.data?.fetchBoards)
        } else {
            setCheckList([])
        }
    }

    const onCheckedItem = (list) => {
        if(checkList.every((cur) => cur.number !== list.number)) {
            setCheckList([...checkList, list])
        } else {
            const result = checkList.filter((cur) => cur.id !== list.id)
            setCheckList(result)
        }
    }

    const isChecked = (list) => {
        return checkList.some((cur) => cur.number === list.number)
    }

    return(
        <S.Container>
            <S.Wrapper>
                <S.TableBox>
                    <S.RowTitle>
                        <S.ThCheckBox>
                            <input type={"checkbox"} onChange={onClickCheckAll} checked={checkList.length === props.data?.fetchBoards.length}/>
                        </S.ThCheckBox>
                        <S.ThNumberBox>번호</S.ThNumberBox>
                        <S.ThTitleBox>제목</S.ThTitleBox>
                        <S.ThDateBox>작성일</S.ThDateBox>
                    </S.RowTitle>
                    {props.data?.fetchBoards.map(list => (
                        <S.Row key={list.number}>
                            <S.TdCheckBox>
                                <input type={"checkbox"} onChange={() => onCheckedItem(list)} checked={isChecked(list)} />
                            </S.TdCheckBox>
                            <S.TdNumberBox>{list.number}</S.TdNumberBox>
                            <S.TdTitleBox>{list.title}</S.TdTitleBox>
                            <S.TdDateBox>{String(list.createdAt).substring(0, 10)}</S.TdDateBox>
                        </S.Row>
                    ))}
                </S.TableBox>
                <S.BottomBox>
                    <S.DeleteButton>선택 삭제</S.DeleteButton>
                    1
                </S.BottomBox>
            </S.Wrapper>
        </S.Container>
    )
}

export default BoardsListUI