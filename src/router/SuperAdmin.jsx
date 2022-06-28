import { Outlet } from "react-router-dom";

/** Component */
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";

const SuperAdmin = () => {
  const data = JSON.parse(localStorage.getItem("SPORTLY_ACCESS"));
  return data ? (
    <>{data.user.roles[0] === "ROLE_SUPER_ADMIN" ? <Outlet /> : <NotFound />}</>
  ) : (
    <NotFound />
  );
};

export default SuperAdmin;
