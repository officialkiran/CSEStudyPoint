import { useParams } from "react-router-dom";
import subjectsData from "../data/subjectsData";
import { Link } from "react-router-dom";

function Chapter() {
  const { subjectName } = useParams();

  let chapters = [];

  // 🔥 search in ALL semesters
  Object.values(subjectsData).forEach((semester) => {
    if (semester[subjectName]) {
      chapters = semester[subjectName];
    }
  });

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
      <h1 style={{ textAlign: "center" }}>
        {subjectName}
      </h1>

      {chapters.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>
          No chapters found 😢
        </h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {chapters.map((chapter) => (
            <Link
              key={chapter}
              to={`/resources/${encodeURIComponent(subjectName)}/${encodeURIComponent(chapter)}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  padding: "20px",
                  background: "#FFEBCC",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: "600",
                  border: "1px solid #BFDDF0",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {chapter}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chapter;