import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Furnitures from "./components/Furnitures";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import FurnituresBis from "./components/FurnituresBis";
import Footer from "./components/Footer"
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
>>>>>>> main


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <Navbar />
        

        {/* passe la const displayCartContent comme propriété de Cart pour afficher les meubles à l'intérieur du panier */}
        {/* <Cart cart={displayCartContent} /> */}
      </header>

      <body className="App-body">
        {/* affiche meubles dans une grid */}
        {/* <Row xs={1} md={3} className="gridCards"> */}
        <FurnituresBis />
        {/* </Row> */}

        <Footer />

      </body>
    </div>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
>>>>>>> main
  );
}

export default App;
