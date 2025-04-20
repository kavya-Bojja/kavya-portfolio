import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <div>
        
        {/* <Routes>
          <Route path ='/' element ={<Layout/>}>  //Parent route that renders layout component
                 <Route index element ={<Home/>}/>  //index means it renders at root path
                 <Route path ='/about' element = {<About/>} />
                 <Route path ='/skills' element = {<Skills/>} />
                 <Route path ='/projects' element = {<Projects/>} />
                 <Route path ='/contact' element = {<Contact/>} />
          </Route>
          
        </Routes> */}

<Navbar />
      <main className="bg-gray-100">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-white shadow-md rounded-xl my-6 max-w-5xl mx-auto">
          <Home />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-16 px-6 bg-sky-50 shadow-md rounded-2xl my-6 mx-auto max-w-5xl">
          <About />
        </section>
         {/* Education Section */}
         <section id="education" className="min-h-screen py-16 px-6 bg-sky-50 shadow-md rounded-2xl my-6 mx-auto max-w-5xl">
          <Education />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 px-6 bg-white shadow-md rounded-2xl my-6 mx-auto max-w-5xl">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 px-6 bg-rose-50 shadow-md rounded-2xl my-6 mx-auto max-w-5xl">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 px-6 bg-white shadow-md rounded-2xl my-6 mx-auto max-w-5xl">
          <Contact />
        </section>
      </main>
      </div>
      
    </>
  );
}

export default App
