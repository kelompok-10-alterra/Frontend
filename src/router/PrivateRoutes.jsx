import { Outlet } from "react-router-dom";

/** Component */
import Navbar from "../components/Navbar";

const PrivateRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
