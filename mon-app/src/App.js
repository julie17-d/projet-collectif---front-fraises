import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Furnitures from './components/Furnitures';

function App() {

  //récupère les deux données du component Furnitures.jsx
  const [furnitures, cart] = Furnitures()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="danger">TEST</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          fraises
        </a>
      </header>
      <body className='App-body'>
        {console.log(cart)}
        {JSON.stringify(cart)}
        <Row xs={1} md={3} className="gridCards">
          {furnitures}
        </Row>
      </body>
    </div>
  );
}

export default App;
