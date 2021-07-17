import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/join-chat" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
