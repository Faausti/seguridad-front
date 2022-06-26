import React from "react";
import { Route, Routes } from "react-router-dom";

import LogIn from "./Login/View/Login";
import Register from "./Register/View/Register";

const Router = () => {
  return (
    <Routes>
      <>
        <Route path="/registar" element={<Register />} />
        <Route path="/" element={<LogIn />} />
      </>
    </Routes>
  );
};

export default Router;
