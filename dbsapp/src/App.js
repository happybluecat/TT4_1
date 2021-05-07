import "./components/style.css";
import Login from "./components/Login";
import TransferPage from "./components/TransferPage/TransferPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import useToken from './components/useToken';

// import Transaction from "./components/TransactionView/Transaction"
// import AuthContext from "./store/auth-context";

function App() {
  //const ctx = useContext(AuthContext);
  //{ctx.isLoggedIn && (<Route path="/TransferPage" exact component={TransferPage} />)}

  const { token, setToken } = useToken('');

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Login" exact component={<Login setToken={setToken} />} />
          <Route path="/TransferPage" exact component={TransferPage} />
        </Switch>
      </Router>
    </>
  )
  }
  export default App

