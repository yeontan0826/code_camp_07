export const BoardReadUI = (props) => {
    return(
        <>
            작성자: <input type={"text"} placeholder={"작성자"} onChange={props.onChangeWriter}/><br/>
            제목: <input type={"text"} placeholder={"제목"} onChange={props.onChangeTitle}/><br/>
            내용: <input type={"text"} placeholder={"내용"} onChange={props.onChangeContents}/><br/>
            <button disabled={props.onChangeButtonDisabled} onClick={props.onClickGraphqlApi}>게시글 등록하기</button>
        </>
    )
}

export default BoardReadUI