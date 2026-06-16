function CareerRoadmaps() {
  const roadmaps = [
    {
      title: "🌐 Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "Git & GitHub",
      ],
    },
    {
      title: "🤖 AI / Machine Learning",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
      ],
    },
    {
      title: "☁️ Cloud Computing",
      skills: [
        "Linux",
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "DevOps Basics",
      ],
    },
    {
      title: "🔐 Cyber Security",
      skills: [
        "Networking",
        "Linux",
        "Ethical Hacking",
        "Web Security",
        "Penetration Testing",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        🛣 Career Roadmaps
      </h1>

      <p className="text-gray-600 mb-8">
        Choose a career path and learn the skills required
        to become industry-ready.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {roadmaps.map((roadmap, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {roadmap.title}
            </h2>

            <ul className="space-y-2">
              {roadmap.skills.map((skill, i) => (
                <li
                  key={i}
                  className="border rounded-lg p-2 bg-gray-50"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerRoadmaps;