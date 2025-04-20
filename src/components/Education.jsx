import React from 'react';

export default function Education() {
    const education = [
      {
        degree: "Master of Science in Computer Science",
        school: "University of Memphis, Tennessee",
        duration: "2023 – 2024",
      },
      {
        degree: "Bachelor of Technology in Computer Science",
        school: "Bhoj Reddy Engineering College for Women, Hyderabad",
        duration: "2016 – 2020",
      },
    ];
  
    return (
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Education 🎓</h2>
  
        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
              <p className="text-gray-600">{item.school}</p>
              <p className="text-sm text-gray-500">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  