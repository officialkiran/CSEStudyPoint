import { useNavigate } from "react-router-dom";

function FeaturedSubjects({ search }) {
  const navigate = useNavigate();

  const subjects = [
    "Operating System",
    "DBMS",
    "Computer Networks",
    "DSA",
    "Java",
    "Python",
  ];

  const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>Popular Subjects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {filteredSubjects.map((subject) => (
          <div
            key={subject}
            onClick={() =>
              navigate(`/chapter/${encodeURIComponent(subject)}`)
            }
            style={{
              padding: "20px",
              background: "#f5f5f5",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0,0,0,0.15)";
              e.currentTarget.style.background = "#e8f0ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "#f5f5f5";
            }}
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSubjects;