import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import User from "./User";
import CreateUser from "./CreateUser";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/create/:id" element={<CreateUser />} />
        <Route path="/update" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
