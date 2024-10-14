import React, { useState } from 'react'

function User() {
    const [users,setUsers]=useState([{    
        Name:"Sanalemba",
        Email:"laitonjam99@gmail.com",
        Age:29}
    
    ])
  return (
    <div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((user)=>{
                        return
                        <tr>    <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Age}</td>
                        <td><button>Edit</button>
                        <button>Delete</button></td>
                   </tr>
                    
                    }
                )}

            </tbody>
        </table>
    </div>
    </div>
  )
}

export default User
