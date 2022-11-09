import React, { useEffect, useState } from "react";
import axios from 'axios';
import ListFurniture from "./ListFurniture";

const AllUsers = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/allFurnitures")
            .then((res) => setItem(res.data));
    }, []);
    console.log(item);

    return (
        <div className="list">
            <br />
            <h3>Voici la liste des <u>{item.length} meubles</u> renseignés sur votre site :</h3>
            <br />
            <div>
            {item.map((item) => (
                <ListFurniture item={item} />
            ))}
            </div>
        </div>
    )
};

export default AllUsers;