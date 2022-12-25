import { FC } from "react";
import { AppBar, useMediaQuery, useTheme } from "@mui/material";
import MainToolbar from "./header/MainToolbar";
import { Pages } from "config/PageConfig";
import SubToolbar from "./header/SubToolbar";

const Header: FC = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar position="sticky">
        <MainToolbar pages={Pages} narrowDisplay={xs === true} />
      </AppBar>
      <SubToolbar />
    </>
  );
};

export default Header;
