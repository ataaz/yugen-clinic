import logo from './logo.svg';
import Routes from './routes';
import Header from './Header';
import Home from './Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const domainName = 'http://yugen.local/';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
