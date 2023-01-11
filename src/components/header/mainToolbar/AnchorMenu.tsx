import { FC, useState, MouseEvent } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { pageIcons, PageKey } from "config/PageConfig";

const Container = styled(Box)(() => ({})) as typeof Box;

const MenuItemContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(0.5),
})) as typeof Box;

interface Props {
  pageKeys: PageKey[];
}

export const AnchorMenu: FC<Props> = ({ pageKeys }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorMenu, setAnchorMenu] = useState<HTMLElement | null>(null);

  return (
    <Container>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e: MouseEvent<HTMLElement>) => setAnchorMenu(e.currentTarget)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        sx={{ marginTop: theme.spacing(5.5) }}
        open={!!anchorMenu}
        onClose={() => setAnchorMenu(null)}
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
        {pageKeys.map((pageKey) => (
          <MenuItem
            key={pageKey}
            onClick={() => {
              navigate(`/${pageKey}`);
              setAnchorMenu(null);
            }}
          >
            <MenuItemContent>
              {pageIcons[pageKey]}
              {pageKey.toUpperCase()}
            </MenuItemContent>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};
