import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Explore route /guild-discovery -> guild-discovery page
//Wrong url /guild-discoveryy -> 404 page

//URL /channels/@me/huh

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/channels/@me">
          This is the homepage!
        </Route>
        <Route path="/channels">
          <Redirect to="/channels/@me" />
        </Route>
        <Route path="/about">I am about!</Route>
      </Switch>
    </Router>
  );
}

export default App;
