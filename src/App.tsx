import Router from "./Router";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Router />
    </Container>
  );
};

export default App;
