import { useMutation, useQuery } from "@apollo/client"
import ProductsListUI from "./ProductLists.presenter"
import { FETCH_PRODUCTS, DELETE_PRODUCT } from './ProductLists.queries'

export const ProductsList = () => {

    const { data } = useQuery(FETCH_PRODUCTS)
    const [deleteBoard] = useMutation(DELETE_PRODUCT)

    const onClickDelete = (event) => {
        deleteBoard({
            variables: { productId: event.target.id },
            refetchQueries: [{ query: FETCH_PRODUCTS }]
        })
    }

    return(
        <ProductsListUI 
            data={data}
            onClickDelete={onClickDelete}
        />
    )
}

export default ProductsList