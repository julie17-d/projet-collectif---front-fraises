/* import logo from './logo.svg';
 */import './App.css';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Furnitures from './components/Furnitures';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
     
      <body className='App-body'>
        <Navbar></Navbar>
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
