// src/pages/RegisterPage.jsx

import React from 'react';
import RegisterForm from '../component/RegisterForm';
import { Container, Box, Typography } from '@mui/material';

const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>Create a New Account</Typography>
        <RegisterForm />
      </Box>
    </Container>
  );
};

export default RegisterPage;
