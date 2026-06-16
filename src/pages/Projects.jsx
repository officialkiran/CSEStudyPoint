function Projects() {
  const miniProjects = [
    "Calculator App",
    "To-Do List App",
    "Weather App",
    "Quiz Application",
    "Expense Tracker",
  ];

  const majorProjects = [
    "Student Management System",
    "Cloud Storage System",
    "Online Examination System",
    "E-Commerce Website",
    "Hospital Management System",
  ];

  const technologies = [
    "MERN Stack",
    "Java",
    "Python",
    "Android",
    "AI / ML",
    "Cloud Computing",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        🚀 Project Ideas
      </h1>

      <p className="text-gray-600 mb-8">
        Explore mini and major project ideas to strengthen
        your resume and placement profile.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Mini Projects */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            📱 Mini Projects
          </h2>

          <ul className="space-y-2">
            {miniProjects.map((project, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>

        {/* Major Projects */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            💼 Major Projects
          </h2>

          <ul className="space-y-2">
            {majorProjects.map((project, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            ⚙️ Technologies
          </h2>

          <ul className="space-y-2">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">
          💡 Project Selection Tips
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Choose a project that solves a real problem.</li>
          <li>Use modern technologies and frameworks.</li>
          <li>Host your project online if possible.</li>
          <li>Maintain proper documentation.</li>
          <li>Upload source code to GitHub.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;