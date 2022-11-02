import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayMeubles() {
  let meubles = {
    1: "chaise",
    2: "table",
    3: "tabouret",
    4: "papier peint"
  };
  const arr = [];
  for (let meuble in meubles) {
      arr.push(
        <Card style={{ width: '18rem' }} className='card'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{meubles[meuble]}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      );
  }
  return arr;
}



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
      
          {displayMeubles()}
        
      </body>
    </div>
  );
}

export default App;
