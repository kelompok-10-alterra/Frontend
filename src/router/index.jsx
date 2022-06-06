import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

/** Pages */
import Login from "../pages/Login";
import Membership from "../pages/Membership";
import EditMembership from "../pages/EditMembership";
import AddMembership from "../pages/AddMembership";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        {/* <Route path="/dashboard" element={}/> */}
        <Route path="/membership" element={<Membership />} />
        <Route path="/edit-membership" element={<EditMembership />} />
        <Route path="/add-membership" element={<AddMembership />} />

        {/* <Route path="/class" element={}/> */}
        {/* <Route path="/booking" element={}/>
          <Route path="/newsletter" element={}/>
          <Route path="/content" element={}/> */}
      </Route>
    </Routes>
  );
};

export default GlobalRoutes;
