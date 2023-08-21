import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSettings from "../src/components/commons/apollo/ApolloSettings";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ApolloSettings>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloSettings>
        </RecoilRoot>
    );
}

export default MyApp;
