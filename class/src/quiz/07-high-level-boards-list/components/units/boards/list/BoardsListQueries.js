import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number,
            writer,
            title,
            contents,
            createdAt
        }
    }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`