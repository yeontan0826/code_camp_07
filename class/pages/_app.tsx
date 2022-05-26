import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/quiz/onetwothree/components/commons/layout";
import { globalStyles } from "../src/quiz/onetwothree/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: "http://backend07.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        // 모든 페이지에서 사용할 수 있게끔 <ApolloProvider></ApolloProvider>로 컴포넌트를 감싼다
        <ApolloProvider client={client}>
            {/* <Global styles={globalStyles}/> */}
            {/* <Layout> */}
                <Component {...pageProps} />
            {/* </Layout> */}
        </ApolloProvider>
    );
}

export default MyApp;