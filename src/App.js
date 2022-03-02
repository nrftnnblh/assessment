import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Movie from './pages/movie';
import Tv from './pages/tv-show';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home" exact component={Home} />
        ...<Route path="/movie" component={Movie} />
        <Route path='/tv-show' component={Tv} />... 
      </Switch>
    </Router>
  );
}

export default App;
