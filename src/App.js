
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
      <Modale
        messageModal='Employee created!'
        messageBouton='Close'
        contentModalStyle={{ color: '#001730', background: '#e2d4ca', height: '50%', width: '50%' }}
        buttonStyle={{ backgroundColor: '#93AD18' }}
      />
    </div>
  );
}

export default App;
