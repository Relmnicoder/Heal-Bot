import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import RaidComponent from './components/raidComponents/RaidComponent';
import home from './components/home';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/HealBot" component={RaidComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
