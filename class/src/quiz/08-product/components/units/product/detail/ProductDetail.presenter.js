const ProductDetailUI = (props) => {
    return (
        <div>
            <h1>상품페이지</h1>
            <div>판매자: {props.data ? props.data.fetchProduct.seller : "잠시만 기다려주세요"}</div>
            <div>상품명: {props.data ? props.data.fetchProduct.name : "잠시만 기다려주세요"}</div>
            <div>상품내용: {props.data ? props.data.fetchProduct.detail : "잠시만 기다려주세요"}</div>
            <div>가격: {props.data ? props.data.fetchProduct.price : "잠시만 기다려주세요"}</div>
            <button onClick={props.onClickMoveToEdit}>수정하기</button>
        </div>
    )
}

export default ProductDetailUI