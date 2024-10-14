import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function User() {
  const [users, setUsers] = useState([
    {
      Name: "Sanalemba",
      Email: "laitonjam99@gmail.com",
      Age: 29,
    },
  ]);

  return (
    <div>
        <Link to="/create">Add+</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.Name}</td>
              <td>{user.Email}</td>
              <td>{user.Age}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
