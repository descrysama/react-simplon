import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./view/Login";
import Register from "./view/Register";
import Faq from "./view/faq";
import Search from "./view/searchPage";
        

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
