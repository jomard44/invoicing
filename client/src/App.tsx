import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";
import Navbar from "./componenets/Navbar";
import Edit from "./pages/Edit"
import Delete from "./pages/Delete";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/create"} element={<Create/>} />
          <Route path={"/edit/:id"} element={<Edit/>} />
          <Route path={"/delete/:id"} element={<Delete/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
