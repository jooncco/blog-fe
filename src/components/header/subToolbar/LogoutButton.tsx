import { FC } from "react";
import { IconButton } from "@mui/material";
import { KeyOff } from "@mui/icons-material";

const LogoutButton: FC = () => {
  const handleButtonClick = () => {
    console.log("logout");
  };

  return (
    <IconButton aria-label="logout" onClick={handleButtonClick}>
      <KeyOff />
    </IconButton>
  );
};

export default LogoutButton;
