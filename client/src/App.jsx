import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import User from "./User";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={User}></Route>
          <Route path='/create' element={createImageBitmap}></Route>
          <Route path='/update' element={UpdateUser}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
