import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
// import { Global } from "@emotion/react";
// import Layout from "../src/quiz/onetwothree/components/commons/layout";
// import { globalStyles } from "../src/quiz/onetwothree/commons/styles/globalStyles";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7_vFOAPIIc6Ga4mRhzAbn5m5UXi58DU",
  authDomain: "test-project-afc78.firebaseapp.com",
  projectId: "test-project-afc78",
  storageBucket: "test-project-afc78.appspot.com",
  messagingSenderId: "597545641581",
  appId: "1:597545641581:web:84708c55d3f1bbf782c164",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend07.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
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
