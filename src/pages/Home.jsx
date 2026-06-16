import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FeaturedSubjects from "../components/FeaturedSubjects";
import API from "../services/api";
import { Link } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

 const fetchNotes = async () => {
  try {
    const res = await API.get("/notes");

    console.log("NOTES API:", res.data);

    setNotes(
      Array.isArray(res.data)
        ? res.data.slice().reverse().slice(0, 6)
        : []
    );
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
};
  return (
    <div
      style={{
        background: "#FFF9D2",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "400px",
          alignItems: "center",
          padding: "50px",
          gap: "50px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "48px",
              color: "#8CC0EB",
            }}
          >
            CSEstudyPoint
          </h1>

          <h3>
            Free Notes, PYQs, PDFs, Videos and Study Material
          </h3>

          <p>
            One place for all Computer Science Engineering resources.
          </p>
        </div>

        <div
          style={{
            background: "#FFEBCC",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>🔐 Admin Panel</h2>

          <p>
            Only administrators can upload study material, PDFs,
            diagrams, images and videos.
          </p>

          <button
            onClick={() => navigate("/admin-login")}
            style={{
              background: "#8CC0EB",
              color: "#222222",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Admin Login
          </button>
        </div>
      </div>
<div
  style={{
    maxWidth: "700px",
    margin: "0 auto 40px",
    padding: "0 20px",
  }}
>
  <SearchBar
    search={search}
    setSearch={setSearch}
  />
</div>

<Link
  to="/placement-corner"
  style={{ textDecoration: "none" }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "20px",
      background:
        "linear-gradient(135deg,#2563eb,#1d4ed8)",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      cursor: "pointer",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    }}
  >
    <div>
      <h2>🚀 Placement & Career Corner</h2>

      <p>
        Internship Reports, Training Formats,
        Resume Templates, Interview Questions,
        DSA Sheets, Career Roadmaps and more.
      </p>
    </div>

    <button
      style={{
        background: "white",
        color: "#2563eb",
        border: "none",
        padding: "12px 24px",
        borderRadius: "8px",
        fontWeight: "bold",
      }}
    >
      Explore →
    </button>
  </div>
</Link>

{/* FEATURED SUBJECTS */}
<FeaturedSubjects search={search} />

      {/* BROWSE BY SEMESTER */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          textAlign: "center",
        }}
      >
        <h2>🎓 Browse by Semester</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <div
              key={sem}
              onClick={() => navigate(`/subject/${sem}`)}
              style={{
                background: "#FFEBCC",
                border: "1px solid #BFDDF0",
                padding: "25px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "0.3s",
                fontWeight: "600",
              }}
            >
              Semester {sem}
            </div>
          ))}
        </div>
      </div>

      {/* LATEST NOTES */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "50px auto",
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#8CC0EB",
          }}
        >
          📚 Latest Notes
        </h2>

        {notes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {notes.map((note) => (
              <div
                key={note._id}
onClick={() => navigate(`/note/${note._id}`)}
                style={{
                  cursor: "pointer",
                  background: "#FFEBCC",
                  padding: "20px",
                  borderRadius: "15px",
                  border: "1px solid #BFDDF0",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
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
                <h3 style={{ color: "#8CC0EB" }}>
                  {note.title}
                </h3>

                <p>
                  <strong>📖 Subject:</strong> {note.subject}
                </p>

                <p>
  <strong>📑 Chapter:</strong> {note.chapter || "N/A"}
</p>

                <p>
                  <strong>🎓 Semester:</strong> {note.semester}
                </p>
<p>
  <strong>📂 Category:</strong> {note.category}
</p>
                <button
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#8CC0EB",
                    color: "#222222",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  Open Note
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* WHY USE CSESTUDYPOINT */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Why Use CSEstudyPoint?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div>📚 Free Notes</div>
          <div>📝 PYQs</div>
          <div>🎥 Video Resources</div>
          <div>📄 PDF Downloads</div>
          <div>🏛 Architecture Diagrams</div>
          <div>📊 Charts & Summaries</div>
        </div>
      </div>
    </div>
  );
}

export default Home;