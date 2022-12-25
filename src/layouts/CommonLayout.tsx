import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CommonLayoutProps {
  showFloatingProfile?: boolean;
  showFloatingIndex?: boolean;
}

const CommonLayout: FC<CommonLayoutProps> = ({
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
