const ProductWriteUI = (props) => {
    return (
        <div>
            <h1>상품 {props.isEdit ? "수정" : "등록"} 페이지</h1>
            판매자: <input type={"text"} placeholder={"작성자"} onChange={props.onChangeSeller}/><br/>
            상품명: <input type={"text"} placeholder={"제목"} onChange={props.onChangeName}/><br/>
            내용: <input type={"text"} placeholder={"내용"} onChange={props.onChangeDetail}/><br/>
            가격: <input type={"text"} placeholder={"내용"} onChange={props.onChangePrice}/><br/>
            <button onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}>
                {props.isEdit ? "수정하기" : "등록하기"}
            </button>
        </div>
    )
}

export default ProductWriteUI