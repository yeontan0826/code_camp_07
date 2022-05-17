import { gql ,useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
    query fetchProduct ($productId: ID) {
        fetchProduct(productId: $productId) {
            _id,
            seller,
            name,
            detail,
            price,
            createdAt
        }
    }
`

const RoutedPage = () => {
    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.page
        }
    })

    return(
        <div>
            <div>상품글 고유아이디: ${router.query.page}</div>
            <div>판매자: {data ? data.fetchProduct.seller : "loading..."}</div>
            <div>상품이름: {data ? data.fetchProduct.name : "loading..."}</div>
            <div>상품내용: {data ? data.fetchProduct.detail : "loading..."}</div>
            <div>상품가격: {data ? data.fetchProduct.price : "loading..."}</div>
        </div>
    )
}

export default RoutedPage