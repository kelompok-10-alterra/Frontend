import { Route, Routes } from "react-router-dom";

/** Styles */
import "./App.css";

/** Pages */
import Login from "./pages/Login";

/** Components **/
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app_container">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
