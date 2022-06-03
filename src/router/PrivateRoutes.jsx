import { Outlet } from "react-router-dom";
/** Component */
import Navbar from "../components/Navbar";

export default function PrivateRoutes() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
