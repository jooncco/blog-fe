import { FC } from "react";
import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "48px",
  height: "48px",
})) as typeof Box;

export const EmptyBox: FC = () => {
  return <Container />;
};

export default EmptyBox;
