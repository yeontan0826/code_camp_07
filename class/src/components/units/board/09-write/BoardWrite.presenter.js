// HTML 컴포넌트
import * as S from './BoardWrite.style'

const BoardWriteUI = (props) => {
    return(
        <div>
            <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
            작성자: <S.WriteInput type={"text"} placeholder={"작성자"} onChange={props.onChangeWriter} defaultValue={props.boardData?.fetchBoard.writer}/><br/>
            제목: <S.WriteInput type={"text"} placeholder={"제목"} onChange={props.onChangeTitle} defaultValue={props.boardData?.fetchBoard.title}/><br/>
            내용: <S.WriteInput type={"text"} placeholder={"내용"} onChange={props.onChangeContents} defaultValue={props.boardData?.fetchBoard.contents}/><br/>
            <div>{props.data?.number}</div>
            <div>{props.data?._id}</div>
            <div>{props.data?.message}</div>
            <button onClick={props.isEdit ? props.onClickUpdate : props.onClickGraphqlApi}>
                {props.isEdit ? "수정하기" : "등록하기"}
            </button>
        </div>
    )
}

export default BoardWriteUI