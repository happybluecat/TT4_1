import "./components/style.css";
import LoginPage from "./components/LoginPage";
import TransferPage from "./components/TransferPage/TransferPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// import Transaction from "./components/TransactionView/Transaction"
// import AuthContext from "./store/auth-context";

function App() {
  //const ctx = useContext(AuthContext);
  //{ctx.isLoggedIn && (<Route path="/TransferPage" exact component={TransferPage} />)}
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/TransferPage" exact component={TransferPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
