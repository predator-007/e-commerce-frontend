import React from 'react';
import './App.css';
import './components/login signup/login';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './components/login signup/login';
import Signup from './components/login signup/signup';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
