import React, { useEffect, useState } from "react";
import axios from 'axios';
import ListFurniture from "./ListFurniture";

const AllUsers = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/furnitures")
            .then((res) => setItem(res.data));
    }, []);
    console.log(item);

    return (
        <div>
            <br />
            <h4>Voici la liste des {item.length} meubles renseignés sur votre site :</h4>
            <br />
            {item.map((item) => (
                <ListFurniture item={item} />
            ))}
        </div>
    )
};

export default AllUsers;