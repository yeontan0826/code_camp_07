import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            images
            pickedCount
            useditemAddress {
                zipcode
                address
                addressDetail
                lat
                lng
            }
            buyer {
                _id
                email
                name
                userPoint {
                    amount
                }
            }
            seller {
                name
                _id
                email
            }
            createdAt
        }
    }
`;

export const FETCH_USED_ITEM_QUESTIONS = gql`
    query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
        fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
            user {
                _id
                name
            }
            contents
            createdAt
        }
    }
`;

export const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId: ID!) {
        deleteUseditem(useditemId: $useditemId)
    }
`;

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
    mutation createPointTransactionOfBuyingAndSelling($useditemId: ID!) {
        createPointTransactionOfBuyingAndSelling(useritemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
        }
    }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
    mutation toggleUseditemPick($useditemId: ID!) {
        toggleUseditemPick(useditemId: $useditemId)
    }
`;
