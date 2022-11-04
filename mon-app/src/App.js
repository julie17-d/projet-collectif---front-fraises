/* import logo from './logo.svg';
 */import './App.css';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Furnitures from './components/Furnitures';


function App() {
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
        <Row xs={1} md={3} className="gridCards">
          {/* <CardGroup> */}
        {Furnitures()}
        {/* </CardGroup> */}
        </Row>
      </body>
    </div>
  );
}

export default App;
