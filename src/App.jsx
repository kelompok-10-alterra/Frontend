import { Route, Routes } from "react-router-dom";

/** Styles */
import "./App.css";

/** Pages */
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="app_container">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
