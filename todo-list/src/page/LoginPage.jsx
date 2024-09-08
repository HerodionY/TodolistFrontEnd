import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../component/LoginForm';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    onLogin(userData); // Panggil fungsi onLogin yang diberikan dari App
    navigate('/todos'); // Redirect ke halaman todos setelah login
  };

  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <LoginForm onLogin={handleLogin} />
        <Box mt={2}>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            color="primary"
            sx={{width:'450px'}}
          >
            Register Here
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
