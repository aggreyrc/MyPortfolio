import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/projects");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      {projects.length === 0 ? (
        <p className="text-center">No projects found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded">
                View Project
              </button>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded float-right">
                Collaborate
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
