import React from "react";
import Users from "../components/Users";
import Navbar from "../components/Navbar";
import AllFurnitures from "../components/AllFurnitures";
import Footer from "../components/Footer";

const Admin = () => {
    let user = "";
    if(JSON.parse(localStorage.getItem("user-info"))!==null){
        user = JSON.parse(localStorage.getItem("user-info"));
    };
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                {/* passe la const displayCartContent comme propriété de Cart pour afficher les meubles à l'intérieur du panier */}
                {/* <Cart cart={displayCartContent} /> */}
            </header>

            <body className="App-body">
                {user.userId === "636cc8e2eef732132cc57a9a" ? (
            <div className="container">
                <h1>Bienvenue sur la page admin</h1>
                <div className="categories-admin">
                    <AllFurnitures />
                    <Users />
                </div>
            </div>
            ) : <h1>Cette page est réservée à l'administratrice du site. 😡</h1>}
                
                <Footer />
            </body>
        </div>
    );
};

export default Admin;
