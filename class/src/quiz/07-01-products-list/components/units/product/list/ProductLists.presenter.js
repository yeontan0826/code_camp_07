import * as S from './ProductLists.style'

export const ProductsListUI = (props) => {
    return(
        <div>
            <S.Row>
                <S.Column>체크박스</S.Column>
                <S.Column>판매자</S.Column>
                <S.Column>상품명</S.Column>
                <S.Column>상품내용</S.Column>
                <S.Column>가격</S.Column>
                <S.Column>삭제</S.Column>
            </S.Row>
            {props.data?.fetchProducts.map((el) => (
                // <Fragment key={el.number}>
                <S.Row key={el._id}>
                    <S.Column><input type="checkbox" /></S.Column>
                    <S.Column>{el.seller}</S.Column>
                    <S.Column>{el.name}</S.Column>
                    <S.Column>{el.detail}</S.Column>
                    <S.Column>{el.price}</S.Column>
                    <S.Column>
                        <button id={el._id} onClick={props.onClickDelete}>삭제</button>
                    </S.Column>
                </S.Row>
            ))}
        </div>
    )
}

export default ProductsListUI

