import { FC, ReactNode } from "react";
import { Badge, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  icon: ReactNode;
  href: string;
  showBadge?: boolean;
  badgeContent?: number;
  badgeColor?:
    | "default"
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
}

const SubToolbarButton: FC<Props> = ({
  icon,
  href,
  showBadge = false,
  badgeContent,
  badgeColor,
}) => {
  const navigate = useNavigate();

  return (
    <IconButton aria-label="login" onClick={() => navigate(href)}>
      {showBadge && (
        <Badge badgeContent={badgeContent} color={badgeColor}>
          {icon}
        </Badge>
      )}
      {!showBadge && icon}
    </IconButton>
  );
};

export default SubToolbarButton;
