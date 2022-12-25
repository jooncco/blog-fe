import { styled, Toolbar } from "@mui/material";

const BasicToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
})) as typeof Toolbar;

export default BasicToolbar;
