import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Create from "./componenets/Create";
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
