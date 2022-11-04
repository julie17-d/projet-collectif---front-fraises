import logo from './logo.svg';
import './App.css';
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
// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
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
      <Row xs={1} md={3} className="gridCards">
        {/* <CardGroup> */}
      {Furnitures()}
      {/* </CardGroup> */}
      </Row>
    </body>
  </div>
  )

  }



export default App;
