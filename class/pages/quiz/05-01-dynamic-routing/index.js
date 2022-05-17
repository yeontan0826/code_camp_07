import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct ($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id,
            number,
            message 
        }
    }
`

const RoutingPage = () => {

    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)

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

    const onClickHandler = async () => {
        try {
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

            router.push(`./05-02-dynamic-routed/${result.data.createProduct._id}`)
        } catch(error) {
            console.error(`!!!!!!   에러발생   !!!!!!\n${error}`)
        }
    }

    return(
        <div>
            <div>판매자: <input type={"text"} onChange={onChangeSeller}/></div>
            <div>상품명: <input type={"text"} onChange={onChangeName}/></div>
            <div>상품내용: <input type={"text"} onChange={onChangeDetail}/></div>
            <div>상품가격: <input type={"text"} onChange={onChangePrice}/></div>
            <button onClick={onClickHandler}>상품 등록</button>
        </div>
    )
}

export default RoutingPage