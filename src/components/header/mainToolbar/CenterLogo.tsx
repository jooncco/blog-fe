import { FC } from "react";
import { Avatar, IconButton } from "@mui/material";
import AvatarLogo from "assets/img/logo_avatar.png";

export const CenterLogo: FC = () => {
  return (
    <IconButton href="/">
      <Avatar src={AvatarLogo} alt="logo_avatar" />
    </IconButton>
  );
};

export default CenterLogo;
