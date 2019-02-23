import React, { Component } from 'react';
import './assets/scss/common.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './components/Index/';
import Article from './components/Index/';
import Admin from './components/Index/';
import NotFound from './components/NotFound/';
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Index} />
        <Route path="/admin" component={Admin} />
        <Route path="/article:id" component={Article} />
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

export default App;
