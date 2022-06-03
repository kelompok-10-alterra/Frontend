import React from "react";
import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";

/** Pages */
import Login from "../pages/Login";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={}/>
          <Route path="/membership" element={}/>
          <Route path="/class" element={}/>
          <Route path="/booking" element={}/>
          <Route path="/newsletter" element={}/>
          <Route path="/content" element={}/>
      </Route> */}
    </Routes>
  );
}

export default GlobalRoutes;
