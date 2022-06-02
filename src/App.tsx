import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { getTodos } from './redux/actions/todos';

function App() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch])


  return (
    <Router>
      <Container maxWidth='lg'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
