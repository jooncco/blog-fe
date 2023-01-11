import { FC } from "react";
import { styled, Toolbar } from "@mui/material";
import EmptyBox from "./mainToolbar/EmptyBox";
import LeftLogo from "./mainToolbar/LeftLogo";
import Pages from "./mainToolbar/Pages";
import CenterLogo from "./mainToolbar/CenterLogo";
import { AnchorMenu } from "./mainToolbar/AnchorMenu";
import { pageKeys } from "config/PageConfig";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
})) as typeof Toolbar;

type Props = {
  narrowDisplay: boolean;
};

const MainToolbar: FC<Props> = ({ narrowDisplay }) => {
  return (
    <StyledToolbar>
      {!narrowDisplay && (
        <>
          <LeftLogo />
          <Pages pageKeys={pageKeys} />
        </>
      )}
      {narrowDisplay && (
        <>
          <EmptyBox />
          <CenterLogo />
          <AnchorMenu pageKeys={pageKeys} />
        </>
      )}
    </StyledToolbar>
  );
};

export default MainToolbar;
