import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    // <>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="bg-main min-h-screen m-0 p-0 box-border">
              <Home />
            </div>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
    // </>
  );
};

export default App;
