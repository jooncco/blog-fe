import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Create } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";

const WriteButton: FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/write");
  };

  return (
    <IconButton aria-label="write" onClick={handleButtonClick}>
      <Badge badgeContent={3} color="error">
        <Create />
      </Badge>
    </IconButton>
  );
};

export default WriteButton;
