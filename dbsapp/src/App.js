import "./components/style.css";
import LoginPage from "./components/LoginPage";
import TransferPage from "./components/TransferPage/TransferPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// import Transaction from "./components/TransactionView/Transaction"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <TransferPage />
        </Switch>
      </Router>
    </>
  );
}

export default App;
