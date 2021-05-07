import './components/style.css';
import LoginPage from './components/LoginPage'
import TransferPage from './components/TransferPage/TransferPage'
// import NavBar from "./component/NavBar/NavBar";
// import Transaction from "./components/TransactionView/Transaction"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TransferPage />
      </header>
      {/* <NavBar /> */}
      {/* <Transaction /> */}
    </div>
  );
}

export default App;
