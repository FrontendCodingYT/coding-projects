import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import GuildDiscovery from "./pages/GuildDiscovery/GuildDiscovery";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/channels/@me">
          <Home />
        </Route>
        <Route path="/channels">
          <Redirect to="/channels/@me" />
        </Route>
        <Route path="/guild-discovery">
          <GuildDiscovery />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
