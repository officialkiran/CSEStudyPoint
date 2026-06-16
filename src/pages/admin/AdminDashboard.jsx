import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={container}>
      <h1 style={{ color: "#2563eb" }}>🔐 Admin Dashboard</h1>
      <p>Manage all study content from here.</p>

      {/* UPLOAD SECTION */}
      <Section title="📤 Upload Content">
        <LinkCard title="➕ Add Note" path="/admin/add-note" />
        <LinkCard title="🖼 Upload Image" path="/admin/upload-image" />
        <LinkCard title="📄 Upload PDF" path="/admin/upload-pdf" />
        <LinkCard title="🎥 Add Video Link" path="/admin/add-video" />

        {/* NEW ADDITIONS */}
        <LinkCard title="📘 Upload PYQ" path="/admin/upload-pyq" />
        <LinkCard title="📌 Important Questions" path="/admin/upload-important" />
      </Section>

      {/* MANAGEMENT SECTION */}
      <Section title="⚙️ Manage Content">
        <LinkCard title="✏️ Manage Content" path="/admin/manage" />
      </Section>

      {/* PLACEMENT SECTION */}
      <Section title="🚀 Placement Corner">
        <LinkCard title="🚀 Placement Resources" path="/admin/placement" />
      </Section>
    </div>
  );
}

/* SECTION WRAPPER */
function Section({ title, children }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={{ marginBottom: "15px", color: "#111" }}>
        {title}
      </h2>

      <div style={grid}>{children}</div>
    </div>
  );
}

/* CARD */
function LinkCard({ title, path }) {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div
        style={card}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        {title}
      </div>
    </Link>
  );
}

/* STYLES */
const container = {
  maxWidth: "1000px",
  margin: "40px auto",
  padding: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "0.3s",
};

export default AdminDashboard;