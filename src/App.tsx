import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import RaidComponent from './Components/RaidComponents/RaidComponent';
import home from './Components/home';

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
