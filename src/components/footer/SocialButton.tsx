import { FC } from "react";
import { IconButton } from "@mui/material";
import { Key } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginButton: FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <IconButton aria-label="login" onClick={handleButtonClick}>
      <Key />
    </IconButton>
  );
};

export default LoginButton;
