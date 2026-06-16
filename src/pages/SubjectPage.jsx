import { useParams, useNavigate } from "react-router-dom";
import subjectsData from "../data/subjectsData";

function SubjectPage() {
  const { sem } = useParams();
  const navigate = useNavigate();

  // convert object → array of subjects
  const subjects = Object.keys(subjectsData[sem] || {});

  return (
    <div
      style={{
        background: "#FFF9D2",
        minHeight: "100vh",
        padding: "40px",
        color: "#2C3E50",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2C3E50" }}>
        Semester {sem} Subjects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {subjects.map((subject, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(
                `/chapters/${encodeURIComponent(subject)}`
              )
            }
            style={{
              background: "#FFEBCC",
              border: "1px solid #BFDDF0",
              padding: "25px",
              borderRadius: "12px",
              cursor: "pointer",
              textAlign: "center",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectPage;