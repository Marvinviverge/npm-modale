
import './App.css';
import Modale from './lib/components/modale';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

      </header>
      <Modale messageModale='Employee created!' messageBouton='Close' />
    </div>
  );
}

export default App;
