// src/pages/LoginPage.jsx

import React from 'react';
import LoginForm from '../component/LoginForm';
import { Container, Box, Typography } from '@mui/material';

const LoginPage = ({ onLogin }) => {
  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>Login to Your Account</Typography>
        <LoginForm onLogin={onLogin} />
      </Box>
    </Container>
  );
};

export default LoginPage;
