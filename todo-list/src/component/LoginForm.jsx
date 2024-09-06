// src/component/LoginForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Pastikan data yang dikirim sesuai dengan format yang diharapkan oleh API
      const response = await axios.post('http://localhost:8081/api/users/login', { username, password });
      // Panggil onLogin dengan data pengguna
      onLogin(response.data);
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error during login:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </Box>
  );
};

export default LoginForm;
