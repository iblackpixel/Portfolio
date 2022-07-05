import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Projects from "./components/Projects/Projects";
import Tecnologias from "./components/Tecnologias/Tecnologias";

function App() {
  return (
    <div>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/tecno' element={<Tecnologias />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
