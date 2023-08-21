import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, basketState } from "../../../commons/store/States";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const ApolloSettings = (props: any) => {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [, setBasket] = useRecoilState(basketState);

    useEffect(() => {
        // const accessToken = localStorage.getItem("accessToken");
        // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // setAccessToken(accessToken || "");
        // setUserInfo(userInfo || "");

        getAccessToken().then(async (newAccessToken) => {
            setAccessToken(newAccessToken);
        });

        const basket = JSON.parse(localStorage.getItem("basket") || "[]");
        setBasket(basket);
    }, []);

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        // 1. catch Errors
        if (graphQLErrors) {
            for (const error of graphQLErrors) {
                // 2. check this error that is expired
                if (error.extensions.code === "UNAUTHENTICATED") {
                    // 3. get new token by refreshToken
                    getAccessToken().then((newAccessToken) => {
                        // 4. set new token into state named 'accessTokenState'
                        setAccessToken(newAccessToken);

                        // 5. requesting a query that just failed with the newAccessToken
                        operation.setContext({
                            headers: {
                                ...operation.getContext().headers,
                                Authorization: `Bearer ${newAccessToken}`,
                            },
                        }); // change setting (just 'accessToken')
                        return forward(operation);
                    });
                }
            }
        }
    });

    const uploadLink = createUploadLink({
        uri: "https://backend12.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` },
        credentials: "include",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSettings;
