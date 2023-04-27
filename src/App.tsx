import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./view/Login";
import Register from "./view/Register";
        

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
