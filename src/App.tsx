import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Raid from './components/raidComponents/Raid';
import home from './components/home';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/HealBot" component={Raid} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
