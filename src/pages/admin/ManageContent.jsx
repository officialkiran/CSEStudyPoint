import { useEffect, useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
function ManageContent() {
  const [content, setContent] = useState([]);
const navigate = useNavigate();
  // GET ALL CONTENT
  const fetchContent = async () => {
    try {
      const res = await API.get("/notes");
      setContent(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);
<button
  onClick={() =>
    navigate(`/admin/edit/${item._id}`)
  }
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "10px",
  }}
>
  Edit
</button>
  // DELETE CONTENT
  const deleteItem = async (id) => {
    try {
      await API.delete(`/notes/${id}`);

      alert("✅ Deleted Successfully");

      fetchContent();
    } catch (err) {
      console.log(err);
      alert("❌ Delete Failed");
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#2563eb" }}>
        🗂 Manage Content
      </h2>

      {content.length === 0 ? (
        <p>No content found</p>
      ) : (
        content.map((item) => (
          <div
            key={item._id}
            style={{
              background: "#fff",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#2563eb" }}>
              {item.title}
            </h3>

            <p>
              <strong>Subject:</strong> {item.subject}
            </p>

            <p>
              <strong>Chapter:</strong> {item.chapter}
            </p>

            <p>
              <strong>Semester:</strong> {item.semester}
            </p>

            <p>
              <strong>Type:</strong> {item.type}
            </p>

            {item.type === "video" && (
              <p>
                <strong>Video URL:</strong>{" "}
                <a
                  href={item.content}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Video
                </a>
              </p>
            )}

            <button
              onClick={() => deleteItem(item._id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ManageContent;