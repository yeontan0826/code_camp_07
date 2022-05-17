export const BoardReadUI = (props) => {
    return(
        <>
            <div>{props.router.query.number}번 게시글 이동이 완료되었습니다</div>
            <div>작성자: {props.data ? props.data.fetchBoard.writer : "불러오는중..."}</div>
            <div>제목: {props.data ? props.data.fetchBoard.title : "불러오는중..."}</div>
            <div>내용: {props.data ? props.data.fetchBoard.contents : "불러오는중..."}</div>
        </>
    )
}

export default BoardReadUI