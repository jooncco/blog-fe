import { FC } from "react";
import { Box, styled, Typography } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(10),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[900],
})) as typeof Box;

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
})) as typeof Box;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Typography variant="body2">
        Made with ❤️ and <b>React.ts</b>
      </Typography>
      <Box className="copyright">
        <Typography variant="caption">
          © 2022. <b>JunHa Daniel Jeong</b> all rights reseved.
        </Typography>
        <StyledBox>social icon links.</StyledBox>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
