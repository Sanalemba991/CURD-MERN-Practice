import React from "react";

function CreateUser() {
  
  return (
    <div>
      <div>
        <form>
          <div>
            <h2>Create User</h2>
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
  );
}

export default CreateUser;
