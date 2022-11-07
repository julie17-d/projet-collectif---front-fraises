/* import logo from './logo.svg';
 */import './App.css';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';
import Row from 'react-bootstrap/Row';
import Furnitures from './components/Furnitures';

function App() {

  //récupère les deux données du component Furnitures.jsx
  const [furnitures, cart] = Furnitures()
  
  return (
    <div className="App">
      <CartProvider>
        <Container>
          <NavbarComponent></NavbarComponent>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
      
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
