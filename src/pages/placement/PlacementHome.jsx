import { Link } from "react-router-dom";

function PlacementHome() {
  const resources = [
    {
      title: "📄 Report Formats",
      desc: "Internship reports, weekly reports and work logs",
      link: "/placement/report-formats",
    },
    {
      title: "📝 Resume Templates",
      desc: "ATS resumes and fresher resume samples",
      link: "/placement/resume-templates",
    },
    {
      title: "📜 Documents",
      desc: "Certificates, NOC and bonafide formats",
      link: "/placement/documents",
    },
    {
      title: "🎤 Interview Prep",
      desc: "HR and technical interview questions",
      link: "/placement/interview-prep",
    },
    {
      title: "💻 Project Ideas",
      desc: "Mini and major project ideas",
      link: "/placement/project-ideas",
    },
    {
      title: "📥 Downloads",
      desc: "Download templates and formats",
      link: "/placement/downloads",
    },
    {
  title: "🛣 Career Roadmaps",
  desc: "Web Dev, AI/ML, Cyber Security, Cloud Computing",
  link: "/placement/career-roadmaps",
},
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            🚀 Placement Career Corner
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Everything a CSE student needs for internships,
            training, placements, interviews and career growth.
          </p>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {item.desc}
              </p>

              <Link
                to={item.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Open →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlacementHome;