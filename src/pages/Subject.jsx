import { useParams, useNavigate } from "react-router-dom";

function Subject() {
  const { semesterId } = useParams();
  const navigate = useNavigate();

  const subjects = {
    1: [
      "Applied Mathematics-1",
      "Applied Physics-1",
      "Basic Electronics Engineering",
      "Computer Programming",
      "Manufacturing Processes",
    ],
    2: [
      "Applied Mathematics-II",
      "Digital Circuits & Logic Design",
      "Objected Oriented Programming Using C++",
      "Applied Chemistry",
      "Communication Skills",
      "Engineering Graphics",
    ],
    3: [
      "Python Programming",
      "Data Structures",
      "Computer Networks",
      "Computer System Architecture",
      "Discrete Mathematical Structures",
      "Punjabi",
      "Environment and Road Safety Awareness",
    ],
    4: [
      "Algorithm Analysis & Design",
      "Operating Systems",
      "Database Management Systems",
      "Software Engineering",
      "E-commerce",
    ],
    5: [
      "Java Programming",
      "RDBMS Using PL/SQL",
      "Theory of Computation",
      "Network Security",
      "Artificial Intelligence",
    ],
    6: [
      "Cloud Computing",
      "Compiler Design",
      "Machine Learning",
      "Computer Graphics",
      "Mobile Apps Development",
    ],
    7: [
      "Advanced Web Development",
      "Data Mining",
      "Digital Image Processing",
      "Major Project",
    ],
    8: ["Project", "Industry Training", "Presentation"],
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
        background: "#FFF9D2",
        minHeight: "100vh",
        color: "#2C3E50",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Semester {semesterId} Subjects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {subjects[semesterId]?.map((subject) => (
          <div
            key={subject}
            onClick={() =>
              navigate(
                `/chapters/${encodeURIComponent(subject)}`
              )
            }
            style={{
              padding: "25px",
              background: "#FFEBCC",
              borderRadius: "12px",
              border: "1px solid #BFDDF0",
              textAlign: "center",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
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

export default Subject;