import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      {props.children}
      <LayoutFooter />
    </>
  );
};
export default Layout;
