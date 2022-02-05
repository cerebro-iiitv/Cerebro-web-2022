import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
