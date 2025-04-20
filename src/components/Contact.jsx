import React from 'react';

export default function Contact() {
    return (
      <div className="py-16 px-6 bg-white" id="contact">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Contact Me 🤝</h2>
  
        <p className="text-center text-gray-700 max-w-xl mx-auto mb-8">
          Whether you want to collaborate on a project, talk about tech, or just say hi — I'm always open to meaningful conversations!
        </p>
  
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-indigo-600 text-lg font-medium flex-wrap">
          <a href="mailto:kbojja2308@gmail.com" className="hover:underline">
            kbojja2308@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kavya-bojja/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kavya-Bojja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="/Kavya_Bojja_Java_FSD.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  }
  