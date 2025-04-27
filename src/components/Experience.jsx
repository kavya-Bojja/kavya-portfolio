import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section px-6 py-12 bg-gray-100 min-h-screen">
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Experience</h2>

  <div className="experience-card bg-white shadow-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
    <h3 className="text-2xl font-semibold text-blue-800 mb-2">Freddie Mac, USA</h3>
    <p className="text-lg text-gray-600 mb-4"><strong>Java Full Stack Developer</strong> (Jun 2024 – Current)</p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Migrated JavaScript applications to React.js, improving front-end performance and maintainability.</li>
      <li>Enhanced application security by implementing Spring Security with OAuth2 and JWT authentication.</li>
      <li>Integrated Kafka into a microservices architecture to improve system scalability and reduce response times.</li>
      <li>Deployed scalable microservices on AWS and optimized CI/CD pipelines using Jenkins and Docker.</li>
    </ul>
  </div>

  <div className="experience-card bg-white shadow-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
     <h3 className="text-2xl font-semibold text-blue-800 mb-2">University of Memphis, USA</h3>
         <p className="text-lg text-gray-600 mb-4"><strong>GIS Data Analyst</strong> (Jan 2023 – Dec 2023)</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
         <li>Conducted spatial analysis and quality assurance on GIS data for urban planning projects.</li>
           <li>Built interactive mapping applications with Leaflet.js, Mapbox, and OpenLayers.</li>
         <li>Optimized geospatial queries using PostgreSQL/PostGIS and automated tasks with ArcPy and Python.</li>
         <li>Developed dashboards with Tableau and ArcGIS Online for data-driven stakeholder insights.</li>
         </ul>
      </div>


      <div className="experience-card bg-white shadow-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Intellogi Technologies Pvt Ltd, India</h3>
        <p className="text-lg text-gray-600 mb-4"><strong>Full Stack Developer</strong> (Dec 2020 – Sep 2022)</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Developed RESTful APIs using Spring Boot and enabled integration between microservices and client platforms.</li>
          <li>Implemented RabbitMQ for asynchronous messaging, reducing database load by 30%.</li>
          <li>Automated AWS EC2 deployment pipelines with Jenkins and OpenShift, reducing provisioning time.</li>
          <li>Designed SQL stored procedures and triggers to optimize database performance.</li>
        </ul>
      </div>

      <div className="experience-card bg-white shadow-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">Hexaware Technologies, India</h3>
        <p className="text-lg text-gray-600 mb-4"><strong>Java Developer</strong> (Nov 2019 – Oct 2020)</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Built scalable REST APIs and database layers using Spring Boot, Hibernate, and JDBC Template.</li>
          <li>Implemented GraphQL APIs for efficient data retrieval from MongoDB.</li>
          <li>Enhanced backend system scalability by leveraging Spring Cloud Stream and Spring Cloud Task.</li>
        </ul>
      </div>

  {/* Repeat similar blocks for other experiences */}
</section>
  

      

      

    //   <div className="experience-card">
    //     <h3>University of Memphis, USA</h3>
    //     <p><strong>GIS Data Analyst</strong> (Jan 2023 – Dec 2023)</p>
    //     <ul>
    //       <li>Conducted spatial analysis and quality assurance on GIS data for urban planning projects.</li>
    //       <li>Built interactive mapping applications with Leaflet.js, Mapbox, and OpenLayers.</li>
    //       <li>Optimized geospatial queries using PostgreSQL/PostGIS and automated tasks with ArcPy and Python.</li>
    //       <li>Developed dashboards with Tableau and ArcGIS Online for data-driven stakeholder insights.</li>
    //     </ul>
    //   </div>

    // </section>
  );
};

export default Experience;
