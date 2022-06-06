import { Outlet } from "react-router-dom";

/** Component */
import Navbar from "../components/Navbar";

const PrivateRoutes = () => {
  return (
    <div className="private-routes-container">
      <Navbar />
      <div className="private-routes-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateRoutes;
