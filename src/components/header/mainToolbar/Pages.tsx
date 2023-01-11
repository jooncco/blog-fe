import { FC } from "react";
import { Box, styled } from "@mui/material";
import { PageKey } from "config/PageConfig";
import PageButton from "./PageButton";

const Container = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1.25),
})) as typeof Box;

interface Props {
  pageKeys: PageKey[];
}

const Pages: FC<Props> = ({ pageKeys }) => {
  return (
    <Container>
      {pageKeys.map((key) => (
        <PageButton pageKey={key} />
      ))}
    </Container>
  );
};

export default Pages;
