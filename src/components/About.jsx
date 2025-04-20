import React from 'react';

export default function About(){
    return(
        <section 
        id ='about'
        className="min-h-screen py-16 px-6 bg-sky-100 shadow-lg rounded-2xl my-10 mx-auto max-w-5xl"
        > 
        <h1 className="text-3xl font-bold mb-4 text-center text-sky-900">Come Know About Me</h1>
            <p className="text-lg text-gray-700 text-justify">
                I am a passionate Full Stack Developer with a Master's degree in Computer Science, currently working at Freddie Mac. I enjoy building efficient, scalable apps and learning new technologies.
                </p>
                {/* <div className="mt-12">
  <h2 className="text-2xl font-bold text-center mb-8">Things I Love ❤️</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-sm">
    
    <div>
      <img src="/images/dance.png" alt="Dance" className="h-20 mx-auto" />
      <p className="mt-2">Dancing 💃</p>
    </div>

    <div>
      <img src="/images/tech.png" alt="Tech" className="h-20 mx-auto" />
      <p className="mt-2">Learning New Tech 🧠</p>
    </div>

    <div>
      <img src="/images/project.png" alt="Projects" className="h-20 mx-auto" />
      <p className="mt-2">Building Projects 💻</p>
    </div>

    <div>
      <img src="/images/collaboration.png" alt="Collab" className="h-20 mx-auto" />
      <p className="mt-2">Collaborating 🤝</p>
    </div>

    <div>
      <img src="/images/lead.png" alt="Leadership" className="h-20 mx-auto" />
      <p className="mt-2">Leading Teams 👩‍💼</p>
    </div>

    <div>
      <img src="/images/yoga.png" alt="Yoga" className="h-20 mx-auto" />
      <p className="mt-2">Yoga & Meditation 🧘‍♀️</p>
    </div>

    <div>
      <img src="/images/coffee.png" alt="Coffee" className="h-20 mx-auto" />
      <p className="mt-2">Coffee & Desserts ☕🍰</p>
    </div>

    <div>
      <img src="/images/travel.png" alt="Travel" className="h-20 mx-auto" />
      <p className="mt-2">Traveling 🧳</p>
    </div>

    <div>
      <img src="/images/people.png" alt="People" className="h-20 mx-auto" />
      <p className="mt-2">My People ❤️</p>
    </div>

  </div>
</div> */}

<div className="mt-12 px-4">
  <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">Things I Love ❤️</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
    
    {[
      { icon: "dance.png", label: "Dancing 💃" },
      { icon: "tech.png", label: "Learning New Tech 🧠" },
      { icon: "project.png", label: "Building Projects 💻" },
      { icon: "collaboration.png", label: "Collaborating 🤝" },
      { icon: "lead.png", label: "Leading Teams 👩‍💼" },
      { icon: "yoga.png", label: "Yoga & Meditation 🧘‍♀️" },
      { icon: "coffee.png", label: "Coffee & Desserts ☕🍰" },
      { icon: "travel.png", label: "Traveling 🧳" },
      { icon: "people.png", label: "My People ❤️" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-32 h-32 flex flex-col items-center justify-center text-center"
      >
        <img src={`/images/${item.icon}`} alt={item.label} className="h-12 mb-2" />
        <p className="text-xs font-medium text-gray-700">{item.label}</p>
      </div>
    ))}

  </div>
</div>

        </section>
    )
}