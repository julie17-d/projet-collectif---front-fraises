import React from 'react';
import Users from '../components/Users';
import Navbar from "../components/Navbar";

const Admin = () => {
    return (
        <div className="App">


            <header className="App-header">
            <Navbar />

            {/* passe la const displayCartContent comme propriété de Cart pour afficher les meubles à l'intérieur du panier */}
            {/* <Cart cart={displayCartContent} /> */}

            </header>

            <body className="App-body">

            <Users />

            </body>
        </div>
    );
};

export default Admin;