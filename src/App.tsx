import Router from "./Router";
import { Container, ThemeProvider } from "@mui/material";
import DarkTheme from "themes/Dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Container maxWidth="lg" disableGutters={true}>
        <Router />
      </Container>
    </ThemeProvider>
  );
};

export default App;
