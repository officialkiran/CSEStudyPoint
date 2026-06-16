import { useNavigate } from "react-router-dom";

function PlacementCorner() {
  const navigate = useNavigate();

  const sections = [
    {
      
  title: "🎓 Internship Hub",
  desc: "Reports, resumes, certificates and interview prep",
  route: "/placement-corner/internships",
    },
    {
      
  title: "🏭 Training Reports",
  desc: "4 Weeks, 6 Weeks and Industrial Training Reports",
  route: "/placement-corner/training-reports",

    },
    {
      
  title: "📄 Resume Builder",
  desc: "ATS-friendly resumes and templates",
  route: "/placement-corner/resume-builder",

    },
    {
      
  title: "💼 Placement Preparation",
  desc: "Aptitude, DSA, DBMS, OS, CN, OOPs",
  route: "/placement-corner/placement-preparation",

    },
    {
      
  title: "🎤 Interview Questions",
  desc: "HR and Technical Interview Questions",
  route: "/placement-corner/interview-questions",

    },
    {
      
  title: "💻 Coding Practice",
  desc: "LeetCode, GFG Sheets and Coding Questions",
  route: "/placement-corner/coding-practice",

    },
    {
      
  title: "🚀 Projects",
  desc: "Mini and Major Project Ideas",
  route: "/placement-corner/projects",

    },
    {
      
  title: "🛣 Career Roadmaps",
  desc: "Web Dev, AI/ML, Cyber Security, Cloud Computing",
  route: "/placement-corner/career-roadmaps",

    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF9D2",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "15px",
        }}
      >
        🚀 Placement & Career Corner
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 40px",
        }}
      >
        Everything a CSE student needs for internships,
        industrial training, placements and career growth.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {sections.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.route)}
            style={{
              background: "#FFEBCC",
              padding: "25px",
              borderRadius: "15px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <h2>{item.title}</h2>

            <p>{item.desc}</p>

            <button
              style={{
                marginTop: "10px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacementCorner;