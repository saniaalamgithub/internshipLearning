import LoginPage from "./LoginPage";
import HomePageAdmin from "./HomePageAdmin";
import NewUserPage from "./NewUserPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePageAdmin />} />
      <Route path="/regi" element={<NewUserPage />} />
    </Routes>
  );
}

export default App;
