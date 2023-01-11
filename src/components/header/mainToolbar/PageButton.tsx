import { FC } from "react";
import { Box, Button, styled } from "@mui/material";
import { pageIcons, PageKey } from "config/PageConfig";
import { useNavigate } from "react-router-dom";

const ButtonContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(0.5),
})) as typeof Box;

interface Props {
  pageKey: PageKey;
}

const PageButton: FC<Props> = ({ pageKey }) => {
  const navigate = useNavigate();

  return (
    <Button key={pageKey} onClick={() => navigate(`/${pageKey}`)}>
      <ButtonContent>
        {pageIcons[pageKey]}
        {pageKey}
      </ButtonContent>
    </Button>
  );
};

export default PageButton;
