import LayoutBanner from "./banner"
import LayoutFooter from "./footer"
import LayoutNavigation from "./navigation"
import LayoutHeader from "./header"
import { ReactNode } from "react"
import { useRouter } from "next/router"

const HIDDEN_HEADERS = [
    "/12-05-modal-refactoring",
    // ...
    // ...
    // ...
]

interface ILayoutProps {
    children: ReactNode
}

const Layout = (props: ILayoutProps) => {

    const router = useRouter()
    console.log(router)

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
    
    return(
        <>
            {isHiddenHeader || <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{ display: "flex"}}>
                <div style={{ width: "100px", height: "500px", backgroundColor: "orange"}}>Here is SideBar!!</div>
                <div>{props.children}</div>
            </div>
            <LayoutFooter />
        </>
    )
}

export default Layout