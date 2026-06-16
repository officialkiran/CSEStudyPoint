import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#8CC0EB",
        color: "#222222",
        padding: "15px 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#222222",
            fontWeight: "bold",
          }}
        >
          CSEstudyPoint
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#222222",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Home
          </Link>

          <Link
            to="/semester"
            style={{
              color: "#222222",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Semesters
          </Link>

          <Link
            to="/subject/1"
            style={{
              color: "#222222",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Subjects
          </Link>
          <Link to="/placement-corner">
  Placement Corner
</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;