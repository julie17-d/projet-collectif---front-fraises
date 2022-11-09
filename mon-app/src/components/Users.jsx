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
            <h3>Voici la liste des <u>{user.length} users</u> inscrit·e·s sur votre site :</h3>
            <br />
            <div className="list">
            {user.map((user) => (
                <ListUser user={user} />
            ))}
            </div>
        </div>
    )
};

export default AllUsers;