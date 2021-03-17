import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home';
import Tes1 from './pages/tes1';
import Tes3 from './pages/tes3';
import Tes5 from './pages/tes5';

function App() {
  return (
    <>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/1' component={Tes1} />
        <Route exact path ='/3' component={Tes3} />
        <Route exact path ='/5' component={Tes5} />
      </Switch>
    </>
  );
}

export default App;
