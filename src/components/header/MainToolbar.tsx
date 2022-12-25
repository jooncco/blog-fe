import { FC } from "react";
import { styled, Toolbar } from "@mui/material";
import EmptyBox from "./mainToolbar/EmptyBox";
import LeftLogo from "./mainToolbar/LeftLogo";
import Pages from "./mainToolbar/Pages";
import CenterLogo from "./mainToolbar/CenterLogo";
import { AnchorMenu } from "./mainToolbar/AnchorMenu";
import { PageKey } from "config/PageConfig";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
})) as typeof Toolbar;

type Props = {
  pages: PageKey[];
  narrowDisplay: boolean;
};

const MainToolbar: FC<Props> = ({ pages, narrowDisplay }) => {
  return (
    <StyledToolbar>
      {!narrowDisplay && (
        <>
          <LeftLogo />
          <Pages pages={pages} />
        </>
      )}
      {narrowDisplay && (
        <>
          <EmptyBox />
          <CenterLogo />
          <AnchorMenu pages={pages} />
        </>
      )}
    </StyledToolbar>
  );
};

export default MainToolbar;
