// HTML 컴포넌트
import * as S from './BoardWrite.style'

const BoardWriteUI = (props) => {
    return(
        <S.Wrapper>
            <S.InnerBox>
                <S.InputTitle>작성자</S.InputTitle>
                <S.WriteInput type={"text"} placeholder={"작성자"} onChange={props.onChangeWriter}/>
            </S.InnerBox>
            <S.InnerBox>
                <S.InputTitle>제목</S.InputTitle>
                <S.WriteInput type={"text"} placeholder={"제목"} onChange={props.onChangeTitle}/>
            </S.InnerBox>
            <S.InnerBox>
                <S.InputTitle>내용</S.InputTitle>
                <S.WriteInput type={"text"} placeholder={"내용"} onChange={props.onChangeContents}/>
            </S.InnerBox>
            <S.SubmitButton isActive={props.isActive} onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</S.SubmitButton>
        </S.Wrapper>
    )
}

export default BoardWriteUI