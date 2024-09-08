import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Pastikan Link diimpor

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/users/register', { username, password });
      setSuccess('Registration successful!');
      setError(''); // Reset error jika berhasil
      setUsername('');
      setPassword('');
    } catch (error) {
      setSuccess(''); // Reset success jika gagal
      setError('Registration failed');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5">Register</Typography>
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
      {success && <Typography color="success.main">{success}</Typography>}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
      <Box mt={2}>
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          color="primary"
          fullWidth
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
