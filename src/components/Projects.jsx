export default function Projects() {
  const projects = [
    {
      title: "Nomad's Haven",
      description: "Created a dynamic web application for managing and booking caravans, tailored for adventure enthusiasts.",
      technologies: "Ruby on Rails, HTML, CSS, JavaScript",
      features: [
        "User-friendly interface",
        "Intuitive navigation",
        "User authentication",
        "Shopping cart",
        "Booking management"
      ],
      outcome: "Enhanced user experience and showcased full stack development skills, resulting in a functional and attractive application for users."
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website to showcase projects, experiences, and technical skills.",
      technologies: "React.js, Tailwind CSS, JavaScript, Vite",
      features: [
        "Responsive design optimized for all devices",
        "Smooth scrolling and active link navigation",
        "Project and experience showcase",
        "Modular and scalable React component structure"
      ],
      outcome: "Successfully built an interactive and dynamic portfolio, enhancing online presence and demonstrating frontend development expertise."
    },
    {
      title: "Distributed Search Engine for Ranked Web Content and Image Display",
      description: "Built a distributed system that retrieves and ranks web and image search results using a Custom Google API.",
      technologies: "Python, Flask, Google Custom Search API, Distributed Systems concepts",
      features: [
        "Handles distributed querying and aggregation",
        "Ranks search results based on relevance scoring",
        "Displays images alongside web links",
        "Implements scalability and load balancing strategies"
      ],
      outcome: "Demonstrated strong understanding of distributed computing principles such as scalability, concurrency, and efficient data retrieval."
    },
    {
      title: "Predictive Machine Learning Model for Breast Cancer Detection",
      description: "Developed and deployed a robust machine learning model aimed at early detection of breast cancer.",
      technologies: "Logistic Regression, Random Forest, Support Vector Machine",
      features: [
        "Achieved 98% accuracy",
        "Reduced errors by 25% using precision, recall, and F1 score"
      ],
      outcome: "Significantly enhanced early detection capabilities and showcased proficiency in applying advanced machine learning algorithms to real-world healthcare challenges."
    },
    {
      title: "Supply Chain Management Using Kafka",
      description: "Engineered a real-time data pipeline for supply chain management using Apache Kafka.",
      technologies: "Apache Kafka, ERP systems, Inventory Databases, Gradle, Maven",
      features: [
        "Real-time data collection and processing",
        "Kafka producers and consumers",
        "Build automation and seamless data pipeline integration"
      ],
      outcome: "Improved data handling across multiple supply chain nodes, demonstrating expertise in real-time distributed data processing."
    },
    {
      title: "Prediction of Loan Payment",
      description: "Developed a predictive machine learning model to assess the likelihood of borrowers repaying loans, helping financial institutions minimize lending risks.",
      technologies: "Random Forest, Decision Tree, K-Nearest Neighbor, Logistic Regression",
      features: [
        "Utilized Kaggle Loan Prediction dataset (9,578 rows, 14 features)",
        "Addressed imbalanced data using SMOTE",
        "Applied one-hot encoding for categorical variables"
      ],
      outcome: "The Random Forest model significantly aided in making data-driven lending decisions, protecting financial institutions from potential losses."
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8">🛠️ Projects</h2>

      <div className="grid gap-10">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <p className="font-medium mb-2">🚀 Technologies Used:</p>
            <p className="text-gray-600 mb-4">{project.technologies}</p>

            <p className="font-medium mb-2">✨ Features:</p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-600">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <p className="font-medium mb-2">🎯 Outcome:</p>
            <p className="text-gray-600">{project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
