import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import {
  Create,
  Key,
  KeyOff,
  Menu as MenuIcon,
  Person,
  Article,
  Functions,
} from "@mui/icons-material";
import DarkLogo from "assets/img/logo_dark.png";
import LightLogo from "assets/img/logo_light.png";
import AvatarLogo from "assets/img/logo_avatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type PageKey = "bio" | "posts" | "algorithms";
const pages: PageKey[] = ["bio", "posts", "algorithms"];
const pageIcons = {
  bio: <Person sx={{ marginRight: "8px" }} />,
  posts: <Article sx={{ marginRight: "8px" }} />,
  algorithms: <Functions sx={{ marginRight: "8px" }} />,
};

const toolbarSx = {
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
};

const adminToolbarSx = {
  padding: "8px",
  display: "flex",
  justifyContent: "flex-end",
};

const leftLogoSx = {
  height: "50px",
  display: { xs: "none", sm: "flex" },
  "&:hover": {
    cursor: "pointer",
  },
};

const pagesSx = {
  display: { xs: "none", sm: "flex" },
};

const emptyBoxSx = {
  width: "48px",
  display: { xs: "flex", sm: "none" },
};

const avatarLogoSx = {
  display: { xs: "flex", sm: "none" },
};

const anchorMenuSx = {
  display: { xs: "flex", sm: "none" },
};

const Header = () => {
  const [showAnchorMenu, setShowAnchorMenu] = useState(false);
  const navigate = useNavigate();

  const handleClickMenu = (page: string) => {
    setShowAnchorMenu(false);
    navigate(`/${page}`);
  };

  const handleOpenAnchorMenu = () => {
    setShowAnchorMenu(true);
  };

  const handleCloseAnchorMenu = () => {
    setShowAnchorMenu(false);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={toolbarSx}>
          {/* Above xs */}
          <Box
            component="img"
            sx={leftLogoSx}
            src={DarkLogo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          <Box sx={pagesSx}>
            {pages.map((page) => (
              <Button key={page} onClick={() => handleClickMenu(page)}>
                {page}
              </Button>
            ))}
          </Box>
          {/* Below sm */}
          <Box sx={emptyBoxSx} />
          <IconButton sx={avatarLogoSx} href="/">
            <Avatar src={AvatarLogo} alt="logo_avatar" />
          </IconButton>
          <Box sx={anchorMenuSx}>
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
              sx={{ marginTop: "45px" }}
              id="menu-appbar"
              open={showAnchorMenu}
              onClose={handleCloseAnchorMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleClickMenu(page)}>
                  {pageIcons[page]}
                  {page.toUpperCase()}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Admin menu */}
      <Box sx={adminToolbarSx}>
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
      </Box>
    </>
  );
};

export default Header;
