import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Furnitures from "./components/Furnitures";
import Navbar from "./components/Navbar";
import FurnituresBis from "./components/FurnituresBis";
import Footer from "./components/Footer"

function App() {
  //récupère les deux données du component Furnitures.jsx
  // const [furnitures, cartContent] = Furnitures();

  //map sur cartContent pour afficher le contenu du panier
  // const displayCartContent = cartContent.map((meuble) => {
  //   return (meuble.title + " " + meuble.price + "€")
  // })

  return (
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
  );
}

export default App;
