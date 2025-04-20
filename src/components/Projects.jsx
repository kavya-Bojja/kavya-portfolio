import React from 'react';

export default function Projects() {
    const projects = [
      {
        title: "Distributed Search Engine",
        description: "A scalable web content search engine using distributed computing, Custom Google API, and ranking algorithms.",
        tech: ["React", "Node.js", "Express", "Redis", "Google API"],
      },
      {
        title: "Breast Cancer Prediction",
        description: "Machine learning project predicting breast cancer outcomes using classification algorithms and medical datasets.",
        tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      },
      {
        title: "Nomad's Haven",
        description: "A community-based travel platform offering curated travel experiences with user-auth and reviews.",
        tech: ["Angular", "Spring Boot", "MySQL", "AWS"],
      },
      {
        title: "Portfolio Website (This one!)",
        description: "A personal full-stack portfolio built using React and Tailwind CSS to showcase skills, projects, and contact info.",
        tech: ["React", "Tailwind CSS", "Vite"],
      },
      {
        title: "Supply Chain Analysis Using Kafka",
        description: "Real-time analytics dashboard to monitor supply chain data using Kafka for data streaming and MongoDB for storage.",
        tech: ["Kafka", "MongoDB", "Node.js", "Express"],
      }
    ];
  
    return (
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Projects 💻</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
              {/* Optional GitHub/Live links can go here */}
            </div>
          ))}
        </div>
      </div>
    );
  }
  