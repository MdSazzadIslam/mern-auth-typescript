import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Registration from "./views/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/registration" exact component={Registration} />
      </Switch>
    </Router>
  );
}

export default App;
