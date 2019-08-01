import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import RaidComponent from './Components/RaidComponents/RaidComponent';
import home from './Components/home';

import { createStore } from "redux";

let extra = 5

const counter = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1 + extra
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)
store.dispatch({ type: "INCREMENT" })

const App: React.FC = () => {
  console.log(store.getState())
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
