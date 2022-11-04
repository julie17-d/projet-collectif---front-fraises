import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Furnitures from './components/Furnitures';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Button variant="danger">TEST</Button> */}
        {Signin()}
        {Signup()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
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
