import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Tampilan from './pages/tampilan';
import About from './pages/about';
import Tugas from './pages/tugas';
import Login from './pages/login';
import Json from './pages/json';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Tampilan} exact />
          <Route path="/about" component={About} exact />
          <Route path="/tugas" component={Tugas} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      <Json />
      </BrowserRouter>
    </div>
 
 
  );
}

export default App;
