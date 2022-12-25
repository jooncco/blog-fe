import { styled, Toolbar } from "@mui/material";
import { FC } from "react";
import LoginButton from "./subToolbar/LoginButton";
import LogoutButton from "./subToolbar/LogoutButton";
import WriteButton from "./subToolbar/WriteButton";

const StyledToolBar = styled(Toolbar)(() => ({
  padding: "8px",
  display: "flex",
  justifyContent: "flex-end",
})) as typeof Toolbar;

const SubToolBar: FC = () => {
  return (
    <StyledToolBar>
      <LoginButton />
      <LogoutButton />
      <WriteButton />
    </StyledToolBar>
  );
};

export default SubToolBar;
