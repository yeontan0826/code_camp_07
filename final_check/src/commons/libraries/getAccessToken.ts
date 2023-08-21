import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
        restoreAccessToken {
            accessToken
        }
    }
`;

export const getAccessToken = async () => {
    try {
        const graphQLClient = new GraphQLClient("https://backend07.codebootcamp.co.kr/graphql", {
            credentials: "include",
        });

        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        const newAccessToken = result.restoreAccessToken.accessToken;

        return newAccessToken;
    } catch (error: any) {
        console.log(error.message);
    }
};
