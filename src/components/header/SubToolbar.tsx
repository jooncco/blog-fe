import { styled, Toolbar } from "@mui/material";

const SubToolBar = styled(Toolbar)(() => ({
  padding: "8px",
  display: "flex",
  justifyContent: "flex-end",
})) as typeof Toolbar;

export default SubToolBar;
