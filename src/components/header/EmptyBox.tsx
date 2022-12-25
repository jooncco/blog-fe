import { Box, styled } from "@mui/material";

const EmptyBox = styled(Box)(() => ({
  emptyBox: {
    width: "56px",
    height: "56px",
    display: { xs: "flex", sm: "none" },
  },
})) as typeof Box;

export default EmptyBox;
