import { Outlet } from "react-router-dom";

/** Component */
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";

const PrivateRoutes = () => {
  const data = JSON.parse(localStorage.getItem("SPORTLY_ACCESS"));
  return data ? (
    <>
      {(data["user"].roles = "ROLES_SUPER_ADMIN" ? <Outlet /> : <NotFound />)}
    </>
  ) : (
    <NotFound />
  );
};

export default PrivateRoutes;
