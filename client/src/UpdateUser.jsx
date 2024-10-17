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
  })





  
  return ( 
    <div>
    <div>
      <form>
        <div>
          <h2>Update User</h2>
          <label htmlFor="">Name</label>
          <input type="Text" placeholder="Name"></input>
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="Text" placeholder="email"></input>
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="Text" placeholder="age"></input>
        </div>
      <button >Submit</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser
