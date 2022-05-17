import { gql, useMutation } from "@apollo/client"

const CREATE_BOARD = gql `
    mutation  {
        createBoard(
            writer: "류연찬"
            title: "제목"
            contents: "내용"
        ) {
            _id
            number
            message
        }
    }
`

const GraphqlMutationPage = () => {

    
    const [callGraphql] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await callGraphql()
        console.log(result.data)
    }

    return (
        <div>
            <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    )
}

export default GraphqlMutationPage