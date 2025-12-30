import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/create"} element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
