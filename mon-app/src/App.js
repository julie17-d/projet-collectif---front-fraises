import "./App.css";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Furnitures from "./components/Furnitures";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  //récupère les deux données du component Furnitures.jsx
  const [furnitures, cartContent] = Furnitures();

  return (
    <div className="App">
      <header>
        <Cart cart={JSON.stringify(cartContent)} />
      </header>

      <body className="App-body">
        {console.log(cartContent)}
        <Navbar></Navbar>
        <Row xs={1} md={3} className="gridCards">
          {furnitures}
        </Row>
      </body>
    </div>
  );
}

export default App;
