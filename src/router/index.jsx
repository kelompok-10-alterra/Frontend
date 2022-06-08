import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

/** Pages */
import Login from "../pages/Login";
import Membership from "../pages/Membership";
import DetailsMembership from "../pages/DetailsMembership";
import AddMembership from "../pages/AddMembership";
import NotFound from "../pages/NotFound";
import Class from "../pages/Class";
import AddClass from "../pages/AddClass";
import Booking from "../pages/Booking";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        {/* <Route path="/dashboard" element={}/> */}
        <Route path="/membership" element={<Membership />} />
        <Route path="/details-membership" element={<DetailsMembership />} />
        <Route path="/add-membership" element={<AddMembership />} />
        <Route path="/class" element={<Class />} />
        <Route path="/add-class" element={<AddClass />} />
        <Route path="/booking" element={}/>
        {/* 
          <Route path="/newsletter" element={}/>
        <Route path="/class" element={<Class />}/>
        <Route path="/booking" element={<Booking />}/>
        {/* <Route path="/newsletter" element={}/>
          <Route path="/content" element={}/> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default GlobalRoutes;
