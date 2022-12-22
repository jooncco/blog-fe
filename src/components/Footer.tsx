import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer>
      <Typography variant="body2">
        Made with ❤️ and <b>React.ts</b>
      </Typography>
      <Box className="copyright">
        <Typography variant="caption">
          © 2022. <b>JunHa Daniel Jeong</b> all rights reseved.
        </Typography>
        <Box className="social">social icon links.</Box>
      </Box>
    </footer>
  );
};

export default Footer;
