import { Create, Key, KeyOff } from "@mui/icons-material";
import { styled, Toolbar } from "@mui/material";
import { FC } from "react";
import SubToolbarButton from "./subToolbar/SubToolbarButton";

const StyledToolBar = styled(Toolbar)(() => ({
  padding: "8px",
  display: "flex",
  justifyContent: "flex-end",
})) as typeof Toolbar;

const SubToolBar: FC = () => {
  return (
    <StyledToolBar>
      <SubToolbarButton icon={<Key />} href="/login" />
      <SubToolbarButton icon={<KeyOff />} href="/logout" />
      <SubToolbarButton
        icon={<Create />}
        href="/write"
        showBadge={true}
        badgeContent={1}
        badgeColor="error"
      />
    </StyledToolBar>
  );
};

export default SubToolBar;
