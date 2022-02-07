import React from 'react';

const UserItem = ({user}) => {
    return (
    <tr>
        <td scope="col">{user.username}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
    </tr>
    )
}

const UserList = ({users}) => {
    return (
        <div class='container'>
            <table class='table'>
                <thead>
                <tr>
                    <th scope="col">Usename</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => <UserItem user={user} />)}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
