import { gql } from "@apollo/client";

export const UPDATE_USED_ITEM_QUESTSION = gql`
    mutation updateUseditemQuestion($updateUseditemQuestionInput: UpdateUseditemQuestionInput!, $useditemQuestionId: ID!) {
        updateUseditemQuestion(updateUseditemQuestionInput: $updateUseditemQuestionInput, useditemQuestionId: $useditemQuestionId) {
            _id
            contents
        }
    }
`;
