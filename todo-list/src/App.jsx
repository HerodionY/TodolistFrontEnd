// src/App.jsx

import React, { useState } from 'react';
import LoginForm from './component/LoginForm';
import RegisterForm from './component/RegisterForm';
import TodoList from './component/TodoList';
import { Container, Typography, Button } from '@mui/material';

const App = () => {
  const [user, setUser] = useState(null);
  
  return (
    <Container>
      {!user ? (
        <>
          <Typography variant="h2">Todo App</Typography>
          <RegisterForm />
          <LoginForm onLogin={setUser} />
        </>
      ) : (
        <>
          <Typography variant="h4">Welcome, {user.username}</Typography>
          <TodoList userId={user.id} />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setUser(null)}
          >
            Logout
          </Button>
        </>
      )}
    </Container>
  );
};

export default App;
