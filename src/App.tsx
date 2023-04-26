import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Navbar from "./components/Navbar";
        

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
