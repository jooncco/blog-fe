import Router from "./Router";
import MuiThemeProvider from "contexts/MuiThemeProvider";
import { Container } from "@mui/material";

const App = () => {
  return (
    <MuiThemeProvider>
      <Container maxWidth="lg" disableGutters={true}>
        <Router />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
