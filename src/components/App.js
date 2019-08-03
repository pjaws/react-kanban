import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Board from '../containers/Board';
import '../App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/boards/:boardId' component={Board} />
      </div>
    </Router>
  );
}

export default App;
