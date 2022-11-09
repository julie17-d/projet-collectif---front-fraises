import React from 'react';

const ListUser =({ user }) => {
    return (
        <p>{user.email}</p>
    );
};

export default ListUser;