import { gql } from "@apollo/client"

export const FETCH_BOARD = gql`
    query ($number: Int) {
        fetchBoard(number: $number) {
            number,
            writer,
            title,
            contents,
        }
    }
`