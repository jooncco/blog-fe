import { Box, styled } from "@mui/material";

const LeftLogoBox = styled(Box)(() => ({
  height: "50px",
  // display: { xs: "none", sm: "flex" },
  "&:hover": {
    cursor: "pointer",
  },
})) as typeof Box;

export default LeftLogoBox;
