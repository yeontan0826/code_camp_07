// HTML 컴포넌트
import * as S from './BoardWrite.style'

const BoardWriteUI = (props) => {
    return(
        <div>
            작성자: <S.WriteInput type={"text"} placeholder={"작성자"} onChange={props.onChangeWriter}/><br/>
            제목: <S.WriteInput type={"text"} placeholder={"제목"} onChange={props.onChangeTitle}/><br/>
            내용: <S.WriteInput type={"text"} placeholder={"내용"} onChange={props.onChangeContents}/><br/>
            <div>{props.data?.number}</div>
            <div>{props.data?._id}</div>
            <div>{props.data?.message}</div>
            <button onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</button>
        </div>
    )
}

export default BoardWriteUI