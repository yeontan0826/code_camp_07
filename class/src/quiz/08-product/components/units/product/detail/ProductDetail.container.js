import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import ProductDetailUI from "./ProductDetail.presenter"
import { FETCH_PRODUCT } from './ProductDetail.queries'

const ProductDetail = () => {

    const router = useRouter()

    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.id
        }
    })

    const onClickMoveToEdit = () => {
        router.push(`/quiz/08-product/${router.query.id}/edit`)
    }

    return(
        <ProductDetailUI 
            data={data}
            onClickMoveToEdit={onClickMoveToEdit}
        />
    )
}

export default ProductDetail