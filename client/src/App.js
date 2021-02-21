import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home';
import MenuBar from './components/MenuBar';
import Animals from './components/Animals';
import { getAnimals } from './actions/animals';  

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, [currentId, dispatch]);

  return (
   <div style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
   }}>
   <Router>
      <Container>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Animals" component={Animals} setCurrentId={setCurrentId} />
      </Container>
    </Router>
    </div>
  );

}

export default App;
