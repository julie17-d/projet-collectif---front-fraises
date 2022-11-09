import React, { useEffect, useState } from "react";
import axios from 'axios';
import ListUser from "./ListUser";

const AllUsers = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/users")
            .then((res) => setUser(res.data));
    }, []);
    console.log(user);

    return (
        <div>
            <br />
            <h4>Voici la liste des {user.length} users inscrit·e·s sur votre site :</h4>
            <br />
            {user.map((user) => (
                <ListUser user={user} />
            ))}
        </div>
    )
};

export default AllUsers;