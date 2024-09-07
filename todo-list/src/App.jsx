// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import TodoList from './component/TodoList';
import { Container, Typography, Button, Box } from '@mui/material';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4">Todo App</Typography>
          {user && (
            <Button variant="contained" color="secondary" onClick={() => setUser(null)}>
              Logout
            </Button>
          )}
        </Box>

        <Routes>
          {/* Login Page */}
          <Route path="/login" element={<LoginPage onLogin={setUser} />} />

          {/* Register Page */}
          <Route path="/register" element={<RegisterForm />} />

          {/* Todo List Page */}
          <Route
            path="/todos"
            element={user ? <TodoList userId={user.id} /> : <LoginPage onLogin={setUser} />}
          />

          {/* Redirect to login if no route matches */}
          <Route
            path="/"
            element={!user ? <LoginPage onLogin={setUser} /> : <TodoList userId={user.id} />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

// Custom LoginPage to handle login routing
const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleLogin = (userData) => {
    onLogin(userData);
    navigate('/todos'); // Redirect to todos after login
  };

  return (
    <Container>
      <LoginForm onLogin={handleLogin} />
      <Box mt={2}>
        <Button component={Link} to="/register" variant="outlined" color="primary">
          Register Here
        </Button>
      </Box>
    </Container>
  );
};
