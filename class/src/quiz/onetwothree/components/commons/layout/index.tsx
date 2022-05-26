import { ReactNode } from "react"
import LayoutHeader from "./header"
import LayoutBanner from "./banner"
import LayoutNavigation from "./navigation"
import LayoutSidebar from "./sidebar"
import LayoutFooter from "./footer"

interface ILayoutProps {
    children: ReactNode
}

const Layout = (props: ILayoutProps) => {
    return(
        <>
            <LayoutHeader />
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{display: "flex"}}>
                <LayoutSidebar />
                <div>{props.children}</div>
            </div>
            <LayoutFooter />
        </>
    )
}

export default Layout