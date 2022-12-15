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
  bio: <Person sx={{ marginRight: "4px" }} />,
  posts: <Create sx={{ marginRight: "4px" }} />,
  algorithms: <Functions sx={{ marginRight: "4px" }} />,
};

const sx = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
  },
  adminToolbar: {
    padding: "8px",
    display: "flex",
    justifyContent: "flex-end",
  },
  leftLogo: {
    height: "50px",
    display: { xs: "none", sm: "flex" },
    "&:hover": {
      cursor: "pointer",
    },
  },
  pages: {
    gap: "10px",
    display: { xs: "none", sm: "flex" },
  },
  emptyBox: {
    width: "48px",
    display: { xs: "flex", sm: "none" },
  },
  avatarLogo: {
    display: { xs: "flex", sm: "none" },
  },
  anchorMenu: {
    display: { xs: "flex", sm: "none" },
  },
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
        <Toolbar sx={sx.toolbar}>
          {/* Above xs */}
          <Box
            component="img"
            sx={sx.leftLogo}
            src={DarkLogo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          <Box sx={sx.pages}>
            {pages.map((page) => (
              <Button key={page} onClick={() => handleClickMenu(page)}>
                {pageIcons[page]}
                {page}
              </Button>
            ))}
          </Box>
          {/* Below sm */}
          <Box sx={sx.emptyBox} />
          <IconButton sx={sx.avatarLogo} href="/">
            <Avatar src={AvatarLogo} alt="logo_avatar" />
          </IconButton>
          <Box sx={sx.anchorMenu}>
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
      <Box sx={sx.adminToolbar}>
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
