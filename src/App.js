import React, { useEffect } from 'react';
import Routers from './routes'
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components'
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/redusers/Auth/auth.action';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuth(JSON.parse(localStorage.getItem('auth'))))
  }, [dispatch])

  return (
    <Router>
      <Container fluid className="pl-0 pr-0 pb-5 min-vh-100 bg-primary">
        <Header />
        <Routers />
      </Container>
    </Router>
  );
}

export default App;
