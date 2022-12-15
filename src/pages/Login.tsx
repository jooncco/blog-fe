import { Typography, Button, TextField, Box, Alert } from "@mui/material";

const Login = () => {
  return (
    <Box className="auth">
      <Typography variant="h1">Login</Typography>
      <form>
        <TextField type="text" id="username" placeholder="username" />
        <TextField type="password" id="password" placeholder="password" />
        <Alert severity="error">This is an error.</Alert>
        <Button>Login</Button>
      </form>
    </Box>
  );
};

export default Login;
