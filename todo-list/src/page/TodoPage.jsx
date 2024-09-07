// src/pages/TodoPage.jsx

import React from 'react';
import { Container, Box } from '@mui/material';
import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';

const TodoPage = ({ userId }) => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        {/* Todo Form Component */}
        <TodoForm onAdd={(newTodo) => console.log(newTodo)} />

        {/* Todo List Component */}
        <TodoList userId={userId} />
      </Box>
    </Container>
  );
};

export default TodoPage;
