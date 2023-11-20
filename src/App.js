import logo from './logo.svg';
import './App.css';
import CloseAccount from './components/close_account';
import Sidenav from './components/Sidenav';
import Table from './components/table';

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <Table/>
    </div>
  );
}

export default App;
