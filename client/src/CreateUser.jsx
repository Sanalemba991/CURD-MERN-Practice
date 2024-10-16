import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      age: age ? Number(age) : null, // Convert age to a number if provided
    };

    axios
      .post("http://localhost:3001/create", userData) // Ensure the URL is correct
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
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name} // Controlled input
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            placeholder="Age"
            value={age} // Controlled input
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
