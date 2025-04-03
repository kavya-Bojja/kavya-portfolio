import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path ='/' element = {<Home/>} />
          <Route path ='/about' element = {<About/>} />
          <Route path ='/skills' element = {<Skills/>} />
          <Route path ='/projects' element = {<Projects/>} />
          <Route path ='/contact' element = {<Contact/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App
