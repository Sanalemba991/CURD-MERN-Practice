import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  })
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
              <Link to="/update">Edit</Link>
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
