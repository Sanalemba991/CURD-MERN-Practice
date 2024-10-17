import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {


  const {id}=useParams

  const [name,setName]=useState()
  const[email,setEmail]=useState()
  const [age,setAge]=useState()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3001/getUser`+id)
    .then(res=>console.log)
    setName(result.data.name)
    setEmail(result.data.email )
    setAge(result.data.age)

  })


  const update  = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      age: age ? Number(age) : null, // Convert age to a number if provided
    };

    axios
      .put("http://localhost:3001/create/"+id, userData) // Ensure the URL is correct
      .then((result) => {
        console.log(result);
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setAge("");
        navigate('/')
      })
      .catch((err) => {
        console.error("Error creating user:", err); // Improved error logging
      });
  };


  
  return ( 
    <div>
    <div>
      <form onSubmit={update}>
        <div>
          <h2>Update User</h2>
          <label htmlFor="">Name</label>
          <input type="Text" placeholder="Name"  value={name}   onChange={(e) => setName(e.target.value)}></input>
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="Text" placeholder="email" value={email}   onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="Text" placeholder="age" value={age}   onChange={(e) => setAge(e.target.value)}></input>
        </div>
      <button >Submit</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser
