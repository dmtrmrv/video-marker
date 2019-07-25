import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Log from './Log';
import Checklist from './Checklist';
import Settings from './Settings';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Log} />
      <Route path="/checklist" component={Checklist} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
};

export default App;
