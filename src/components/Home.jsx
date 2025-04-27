import React from 'react';


export default function Home(){
    return(
        <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-b from-white to-indigo-50">
      <div className="text-center">

        {/* Optional illustration */}
        {/* <img src="/images/ghibili.png" alt="Kavya" className="w-28 sm:w-36 mb-6 mx-auto rounded-full shadow-md" /> */}

        {/* Tagline */}
        <p className="text-sm sm:text-base text-indigo-500 font-medium tracking-wider uppercase mb-3">
          Full Stack Developer • Tech Enthusiast • Cloud Explorer
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Hey! I'm <span className="text-indigo-600">Kavya Bojja</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl mx-auto">
          Passionate Full Stack Developer crafting beautiful, scalable web apps and always excited to learn something new!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg shadow hover:bg-indigo-100 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll Down Prompt */}
        <div className="mt-12 animate-bounce">
          <a href="#about">
            <svg className="w-6 h-6 text-indigo-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}