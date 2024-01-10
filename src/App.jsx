import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
