import { FC } from "react";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(() => ({
  width: "48px",
  height: "48px",
})) as typeof Box;

export const EmptyBox: FC = () => {
  return <StyledBox />;
};

export default EmptyBox;
