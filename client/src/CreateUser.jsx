import React, { useState } from "react";

function CreateUser() {

  const [name,setName]=useState()
  
  const [email,setEmail]=useState()
  const [age,setAge]=useState()

  
  return (
    <div>
      <div>
        <form >
          <div>
            <h2>Create User</h2>
            <label htmlFor="">Name</label>
            <input type="Text" placeholder="Name"
            onChange={(e)=>setName(e.target.value)}></input>
          
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="Text" placeholder="email"
             onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input type="Text" placeholder="age"
             onChange={(e)=>setAge(e.target.value)}></input>
          </div>
        <button >Update</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
