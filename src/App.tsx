import Router from "./Router";
import { Container } from "@mui/material";
import { FC } from "react";

const App: FC = () => {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Router />
    </Container>
  );
};

export default App;
