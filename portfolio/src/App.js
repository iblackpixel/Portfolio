import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Tecnologias from "./components/Tecnologias/Tecnologias";

function App() {
  return (
    <div>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/tecnologias' element={<Tecnologias />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
