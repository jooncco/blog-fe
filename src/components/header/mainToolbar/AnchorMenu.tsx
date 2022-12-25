import { FC, useState, MouseEvent } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PageIcons, PageKey } from "config/PageConfig";

interface Props {
  pages: PageKey[];
}

export const AnchorMenu: FC<Props> = ({ pages }) => {
  const navigate = useNavigate();
  const [anchorMenu, setAnchorMenu] = useState<HTMLElement | null>(null);

  const handleClickMenu = (page: string) => {
    navigate(`/${page}`);
  };

  const handleOpenAnchorMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorMenu(e.currentTarget);
  };

  const handleCloseAnchorMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenAnchorMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        sx={{ marginTop: "45px" }}
        open={!!anchorMenu}
        onClose={handleCloseAnchorMenu}
        anchorEl={anchorMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
      >
        {pages.map((page) => (
          <MenuItem
            key={page}
            onClick={() => {
              handleClickMenu(page);
              handleCloseAnchorMenu();
            }}
          >
            {PageIcons[page]}
            {page.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
