import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={NavBar} />
          <Route path="/Transfer" exact component={NavBar} />
          <Route path="/AccountDetails" exact component={NavBar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
