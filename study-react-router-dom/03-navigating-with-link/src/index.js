import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Router, Route} from 'react-router'
import {history} from "./routes/history";
import Repos from "./pages/repos";
import About from "./pages/about";

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
  , document.getElementById('root'));
