import { useState } from "react";

export default function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Memphis",
      year: "2023 – 2024",
      coursework: [
        "Distributed Systems",
        "Machine Learning",
        "Artificial Intelligence",
        "Data Mining",
        "Advanced Database Systems",
        "Database Management Systems",
        "Foundations of Computing",
        "Cryptography",
        "Algorithms and Problem Solving",
        "Software Engineering",
      ],
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Bhoj Reddy Engineering College for Women",
      year: "2016 – 2020",
      coursework: [
        "Data Structures through C++",
        "C Programming Language",
        "Python",
        "Java",
        "Operating Systems",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
      ],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🎓 Education</h2>

      <div className="grid gap-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-6 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-gray-600">{item.school} | {item.year}</p>
              </div>
              <span className="text-2xl">
                {openIndex === index ? "➖" : "➕"}
              </span>
            </div>

            {openIndex === index && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">📚 Relevant Coursework:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {item.coursework.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
