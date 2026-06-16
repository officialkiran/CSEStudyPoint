import { Link, useParams } from "react-router-dom";

function Resource() {
  const { subjectName, chapterName } = useParams();

  const resources = [
    "Theory Notes",
    "Diagrams",
    "Charts",
    "Architecture",
    "PYQs",
    "Important Questions",
    "Videos",
    "PDF Notes",
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1>{subjectName}</h1>
      <h2>{chapterName}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {resources.map((resource) => (
          <Link
            key={resource}
            to={`/notes/${subjectName}/${chapterName}/${resource}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <h3>{resource}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Resource;