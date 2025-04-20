import React from 'react';

export default function Skills() {
    const skillCategories = {
      "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      "Backend": ["Node.js", "Express", "Spring Boot", "Java"],
      "Database": ["MySQL", "PostgreSQL", "MongoDB"],
      "Cloud / DevOps": ["AWS", "GCP", "Docker", "Git", "GitHub"],
      "Tools / Testing": ["Postman", "Jest", "JUnit", "Cucumber"]
    };
  
    return (
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Skills 🛠️</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category}</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }