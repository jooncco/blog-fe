import { FC } from "react";
import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DarkLogo from "assets/img/logo_dark.png";
import LightLogo from "assets/img/logo_light.png";

const StyledBox = styled(Box)(() => ({
  height: "50px",
  "&:hover": {
    cursor: "pointer",
  },
})) as typeof Box;

const LeftLogo: FC = () => {
  const navigate = useNavigate();

  return (
    <StyledBox
      component="img"
      src={DarkLogo}
      alt="logo"
      onClick={() => navigate("/")}
    />
  );
};

export default LeftLogo;
