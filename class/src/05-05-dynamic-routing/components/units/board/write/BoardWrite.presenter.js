const BoardWriteUI = (props) => {
    return(
        <>
            <button onClick={props.onClickMove1}>4번 게시글 이동하기</button>
            <button onClick={props.onClickMove2}>5번 게시글 이동하기</button>
            <button onClick={props.onClickMove3}>7번 게시글 이동하기</button>
        </>
    )
}

export default BoardWriteUI