import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Pages/Profile";
import Mainride from "./Pages/Mainride";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/mainride"> Mainride </Link>
        <Link to="/profile"> Profile </Link>
        </nav>
      <Routes>
        <Route path="/mainride" element={<Mainride />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App;