import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import User from "./User";
import CreateUser from "./CreateUser";

function App() {
  const [count, setCount] = useState(0); // count is not being used, consider removing if unnecessary

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
