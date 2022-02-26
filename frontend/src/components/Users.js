import React from 'react';

const UserItem = ({user}) => {
    return (
    <tr>
        <td scope="col">{user.username}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
    </tr>
    )
}

const UserList = ({users}) => {
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th scope="col">Username</th>
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
