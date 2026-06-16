import { Link } from "react-router-dom";

function Semester() {
  const semesters =  [
  { id: 1, name: "Semester 1" },
  { id: 2, name: "Semester 2" },
  { id: 3, name: "Semester 3" },
  { id: 4, name: "Semester 4" },
  { id: 5, name: "Semester 5" },
  { id: 6, name: "Semester 6" },
  { id: 7, name: "Semester 7" },
  { id: 8, name: "Semester 8" },
];
  return (
    <div style={{ maxWidth: "1200px", margin: "50px auto" }}>
      <h1>All Semesters</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {semesters.map((sem) => (
          <Link
            key={sem.id}
            to={`/subject/${sem.id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              style={{
                padding: "30px",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              {sem.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Semester;