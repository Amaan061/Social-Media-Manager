import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Home from "./pages/home/Home";
import RightBar from "./components/RightBar/RightBar";
import "./styles.scss";
const Layout = () => {
  return (
    <div className="dark-theme">
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 6 }}>
          <Home />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
