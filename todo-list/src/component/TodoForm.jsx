// src/components/TodoForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/todos/add', { title, completed });
      onAdd(response.data);
      setTitle('');
      setCompleted(false);
    } catch (error) {
      setError('Error adding todo');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Add Todo</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <Button variant="contained" color="primary" type="submit">Add Todo</Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Container>
  );
};

export default TodoForm;
