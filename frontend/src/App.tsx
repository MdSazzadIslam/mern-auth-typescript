import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Registration from "./views/Registration";
import Dashboard from "./views/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/registration" exact component={Registration} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <Route render={() => <div>Page not found!</div>} />
      </Switch>
    </Router>
  );
}

export default App;
