import React, {useEffect, useState} from "react";
import axios from 'axios';
import ListUser from "./ListUser";

const AllUsers = () => {
    const [user, setUser] = useState([]);

    useEffect( () => {
    axios.get("http://localhost:3001/api/users")
    .then((res) => setUser(res.data));
    }, []);
    console.log(user);

    return (
        <div>
            {user.map((user) => (
            <ListUser user={user} />
            ))}
        </div>
    )
};

export default AllUsers;