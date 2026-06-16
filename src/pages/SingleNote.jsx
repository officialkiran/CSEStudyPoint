import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function SingleNote() {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNote();
  }, [id]);

  const fetchNote = async () => {
    try {
      const res = await API.get(`/notes/${id}`);
      setNote(res.data);
    } catch (error) {
      console.error("Error fetching note:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFileUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;

    return `http://localhost:5000${
      url.startsWith("/") ? url : "/" + url
    }`;
  };

  const formatVideoUrl = (url = "") => {
    if (!url) return "";

    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        Loading...
      </div>
    );
  }

  if (!note) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        Note not found
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#2563eb" }}>
          {note.title}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            color: "gray",
            marginBottom: "15px",
          }}
        >
          <span>📘 Semester {note.semester}</span>
          <span>📖 {note.subject}</span>
          <span>📄 {note.chapter}</span>
          <span>📂 {note.category}</span>
        </div>

        <hr />

        {/* TEXT */}
        {note.contentType === "text" && (
          <div
            style={{
              marginTop: "20px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
            }}
          >
            {note.content}
          </div>
        )}

        {/* IMAGE */}
        {note.contentType === "image" && note.fileUrl && (
          <img
            src={getFileUrl(note.fileUrl)}
            alt={note.title}
            style={{
              width: "100%",
              maxHeight: "600px",
              objectFit: "contain",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        )}

        {/* PDF */}
        {note.contentType === "pdf" && note.fileUrl && (
          <a
            href={getFileUrl(note.fileUrl)}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 20px",
              background: "#2563eb",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            📄 Open PDF
          </a>
        )}

        {/* VIDEO */}
        {note.contentType === "video" && (
          <iframe
            width="100%"
            height="450"
            src={formatVideoUrl(note.content)}
            title={note.title}
            frameBorder="0"
            allowFullScreen
            style={{
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default SingleNote;