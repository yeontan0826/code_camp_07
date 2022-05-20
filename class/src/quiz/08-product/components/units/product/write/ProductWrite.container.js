import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import ProductWriteUI from "./ProductWrite.presenter"
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './ProductWrite.queries'

const ProductWrite = (props) => {

    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT) // 등록하기
    const [updateProduct] = useMutation(UPDATE_PRODUCT) // 수정하기

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const onClickCreate = async () => {
        const result = await createProduct({
            variables: {
                seller,
                createProductInput: {
                    name,
                    detail,
                    price: Number(price)
                }
            }
        })
        console.log(result)
        router.push(`/quiz/08-product/${result.data.createProduct._id}`)
    }

    const onClickUpdate = async () => {
        const result = await updateProduct({
            variables: {
                productId: router.query.id,
                updateProductInput: {
                    name,
                    detail,
                    price: Number(price)
                }
            }
        })
        console.log(result)
        router.push(`/quiz/08-product/${result.data.updateProduct._id}`)
    }

    return(
        <ProductWriteUI 
            onChangeSeller={onChangeSeller}
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            onClickCreate={onClickCreate}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
        />
    )
}

export default ProductWrite