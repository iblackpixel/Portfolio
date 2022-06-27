import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Tecnologias from "./components/Tecnologias/Tecnologias";

function App() {
  return (
    <div>
      <NavBar />
      {/* <About /> */}
      <Tecnologias />
      <div className='App'>
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/tecnologias' element={<Tecnologias />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
