import { ReactNode } from "react";
import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import { useRouter } from "next/router";
import LayoutSidebar from "./sidebar/LayoutSidebar.presenter";

const HIDDEN_PAGE = [`/login`, `/register`];

const Layout = (props: { children: ReactNode }) => {
    const router = useRouter();
    return (
        <>
            {!HIDDEN_PAGE.includes(router.asPath) ? (
                <>
                    <LayoutHeader />
                    <LayoutNavigation />
                    <LayoutSidebar />
                    <ChildrenDiv>{props.children}</ChildrenDiv>
                </>
            ) : (
                <>
                    <ChildrenHomeDiv>{props.children}</ChildrenHomeDiv>
                </>
            )}
        </>
    );
};

export default Layout;

const ChildrenDiv = styled.div`
    width: 1100px;
    margin: auto;
    padding: 50px 0;
`;

const ChildrenHomeDiv = styled.div`
    height: 100vh;
    background-color: #f8f8f8;
`;
