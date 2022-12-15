import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface CommonLayoutProps {
  showFloatingProfile?: boolean;
  showFloatingIndex?: boolean;
}

const CommonLayout: React.FunctionComponent<CommonLayoutProps> = ({
  showFloatingProfile = false,
  showFloatingIndex = false,
}) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CommonLayout;
