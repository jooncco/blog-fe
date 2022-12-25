import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import {
  Create,
  Key,
  KeyOff,
  Menu as MenuIcon,
  Person,
  Functions,
} from "@mui/icons-material";
import DarkLogo from "assets/img/logo_dark.png";
import LightLogo from "assets/img/logo_light.png";
import AvatarLogo from "assets/img/logo_avatar.png";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicToolbar from "./header/BasicToolbar";
import SubToolBar from "./header/SubToolbar";
import LeftLogoBox from "./header/LeftLogoBox";
import PagesBox from "./header/PagesBox";
import EmptyBox from "./header/EmptyBox";

type PageKey = "bio" | "posts" | "algorithms";
const pages: PageKey[] = ["bio", "posts", "algorithms"];
const pageIcons = {
  bio: <Person sx={{ marginRight: "4px" }} />,
  posts: <Create sx={{ marginRight: "4px" }} />,
  algorithms: <Functions sx={{ marginRight: "4px" }} />,
};

const AvatarButton = styled(IconButton)(() => ({
  // display: { xs: "flex", sm: "none" },
})) as typeof IconButton;

const AnchorMenuBox = styled(Box)(() => ({
  // display: { xs: "flex", sm: "none" },
})) as typeof Box;

const Header: React.FC = () => {
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
      <AppBar position="sticky">
        <BasicToolbar>
          {/* Above xs */}
          <LeftLogoBox
            component="img"
            src={DarkLogo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          <PagesBox>
            {pages.map((page) => (
              <Button key={page} onClick={() => handleClickMenu(page)}>
                {pageIcons[page]}
                {page}
              </Button>
            ))}
          </PagesBox>
          {/* Below sm */}
          <EmptyBox />
          <AvatarButton href="/">
            <Avatar src={AvatarLogo} alt="logo_avatar" />
          </AvatarButton>
          <AnchorMenuBox>
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
                  {pageIcons[page]}
                  {page.toUpperCase()}
                </MenuItem>
              ))}
            </Menu>
          </AnchorMenuBox>
        </BasicToolbar>
      </AppBar>
      <SubToolBar>
        <IconButton aria-label="login">
          <Key />
        </IconButton>
        <IconButton aria-label="logout">
          <KeyOff />
        </IconButton>
        <IconButton aria-label="write">
          <Badge badgeContent={3} color="error">
            <Create />
          </Badge>
        </IconButton>
      </SubToolBar>
    </>
  );
};

export default Header;
