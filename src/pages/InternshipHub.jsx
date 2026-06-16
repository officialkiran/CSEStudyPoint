
import { useNavigate } from "react-router-dom";

function InternshipHub() {
  const navigate = useNavigate();

  const sections = [
  {
    title: "📄 Report Formats",
    desc: "Internship reports, weekly reports and work logs",
    route: "/placement/report-formats",
  },
  {
    title: "📝 Resume Templates",
    desc: "ATS resumes and fresher resume samples",
    route: "/placement/resume-templates",
  },
  {
    title: "📜 Documents",
    desc: "Certificates, NOC and bonafide formats",
    route: "/placement/documents",
  },
  {
    title: "🎤 Interview Prep",
    desc: "HR and technical interview questions",
    route: "/placement/interview-prep",
  },
  {
    title: "💻 Project Ideas",
    desc: "Mini and major project ideas",
    route: "/placement/project-ideas",
  },
  {
    title: "📥 Downloads",
    desc: "Download templates and formats",
    route: "/placement/downloads",
  },
];

  return (
    <div
      style={{
        background: "#FFF9D2",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#8CC0EB",
            fontSize: "42px",
          }}
        >
          🎓 Internship Hub
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "10px auto",
            color: "#333",
          }}
        >
          Everything you need for internships, reports,
          resumes, certificates, interview preparation
          and project ideas.
        </p>
      </div>

      {/* Cards */}
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
        {sections.map((section, index) => (
          <div
            key={index}
            onClick={() => navigate(section.route)}
            style={{
              background: "#FFEBCC",
              borderRadius: "15px",
              padding: "25px",
              cursor: "pointer",
              border: "1px solid #BFDDF0",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >
            <h2
              style={{
                marginBottom: "15px",
                color: "#222",
              }}
            >
              {section.title}
            </h2>

            <p
              style={{
                color: "#555",
                minHeight: "50px",
              }}
            >
              {section.desc}
            </p>

            <button
              style={{
                marginTop: "15px",
                background: "#8CC0EB",
                color: "#222",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
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

export default InternshipHub;
