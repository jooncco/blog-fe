import { FC } from "react";
import { Box, Button, styled } from "@mui/material";
import { PageIcons, PageKey } from "config/PageConfig";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(() => ({
  gap: "10px",
})) as typeof Box;

interface Props {
  pages: PageKey[];
}

const Pages: FC<Props> = ({ pages }) => {
  const navigate = useNavigate();
  const handleClickMenu = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <StyledBox>
      {pages.map((page) => (
        <Button key={page} onClick={() => handleClickMenu(page)}>
          {PageIcons[page]}
          {page}
        </Button>
      ))}
    </StyledBox>
  );
};

export default Pages;
