import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress, Box, Button, TextField } from '@mui/material';

const TodoList = ({ userId }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/todos', {
          params: { userId }
        });
        if (response.status === 204) {
          setTodos([]); // No content
        } else {
          setTodos(response.data);
        }
      } catch (error) {
        setError('Error fetching todos');
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [userId]);

  const handleComplete = async (id) => {
    try {
      const updatedTodo = { completed: true };
      await axios.put(`http://localhost:8081/api/todos/${id}/complete`, updatedTodo);
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: true } : todo)));
    } catch (error) {
      setError('Error updating todo');
      console.error('Error updating todo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      setError('Error deleting todo');
      console.error('Error deleting todo:', error);
    }
  };

  const handleAddTodo = async () => {
    if (!newTodo.trim()) {
      return;
    }

    try {
      const todoItem = { title: newTodo, completed: false, user: { id: userId } };
      const response = await axios.post('http://localhost:8081/api/todos/add', todoItem);
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      setError('Error adding todo');
      console.error('Error adding todo:', error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Todo List</Typography>
      <List>
        {todos.length === 0 ? (
          <Typography variant="body1">No todos available.</Typography>
        ) : (
          todos.map(todo => (
            <ListItem key={todo.id} divider>
              <ListItemText
                primary={todo.title}
                secondary={todo.completed ? 'Completed' : 'Not Completed'}
                sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleComplete(todo.id)}
                disabled={todo.completed}
                sx={{ marginRight: 1 }}
              >
                Selesai
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(todo.id)}
              >
                Hapus
              </Button>
            </ListItem>
          ))
        )}
      </List>
      <Box mt={2}>
        <TextField
          label="New Todo"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
          sx={{ mt: 2 }}
        >
          Add Todo
        </Button>
      </Box>
    </Container>
  );
};

export default TodoList;
