import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./views/Login";
import Registration from "./views/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/registration" exact component={Registration} />
      </Switch>
    </Router>
  );
}

export default App;
