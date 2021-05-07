import './App.css';
import HistoryPage from './components/HistoryPage';
import LoginPage from './components/LoginPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LoginPage />
      <HistoryPage />
      </header>
    </div>
  );
}
export default App;
