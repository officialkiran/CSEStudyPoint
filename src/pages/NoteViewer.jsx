
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function NoteViewer() {
  const { subjectName, chapterName, resourceType } = useParams();

  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, [subjectName, chapterName, resourceType]);

  const fetchResources = async () => {
    setLoading(true);

    try {
      let category = resourceType || "";

      // PYQs -> PYQ
      if (category && category.toLowerCase().includes("pyq")) {
        category = "PYQ";
      }

      const res = await API.get("/notes/filter", {
        params: {
          subject: subjectName || "",
          chapter: chapterName || "",
          category,
        },
      });

      console.log("RESOURCE RESPONSE:", res.data);

      setResources(res.data || []);
    } catch (error) {
      console.error("Error fetching resources:", error);
      setResources([]);
    } finally {
      setLoading(false);
    }
  };

  // Convert YouTube URLs into embed URLs
  const getVideoUrl = (url) => {
    if (!url) return "";

    try {
      // YouTube Playlist
      if (url.includes("youtube.com/playlist")) {
        const listId = new URL(url).searchParams.get("list");
        return `https://www.youtube.com/embed/videoseries?list=${listId}`;
      }

      // YouTube Watch Video
      if (url.includes("youtube.com/watch")) {
        const videoId = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // Short YouTube URL
      if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1];
        return `https://www.youtube.com/embed/${videoId}`;
      }

      return url;
    } catch (error) {
      console.error("Invalid video URL:", error);
      return url;
    }
  };

  return (
    <div style={container}>
      <div style={header}>
        <h1>{subjectName || "Subject"}</h1>
        <h3>{chapterName || "Chapter"}</h3>
        <h4 style={{ color: "#777" }}>
          {resourceType || "Resources"}
        </h4>
      </div>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : resources.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray" }}>
          No content available 😢
        </p>
      ) : (
        resources.map((item) => (
          <div key={item._id} style={card}>
            <h2 style={{ color: "#2563eb" }}>{item.title}</h2>

            <div style={meta}>
              <span>📘 Semester {item.semester}</span>
              <span>📖 {item.subject}</span>
              {item.chapter && (
                <span>📄 {item.chapter}</span>
              )}
            </div>

            <hr style={{ margin: "10px 0" }} />

            {/* TEXT */}
            {item.contentType === "text" && (
              <div style={text}>
                {item.content}
              </div>
            )}

            {/* IMAGE */}
            {item.contentType === "image" && item.fileUrl && (
              <img
                src={`http://localhost:5000${item.fileUrl}`}
                alt={item.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginTop: "10px",
                  maxHeight: "600px",
                  objectFit: "contain",
                }}
              />
            )}

            {/* PDF */}
            {item.contentType === "pdf" && item.fileUrl && (
              <a
                href={`http://localhost:5000${item.fileUrl}`}
                target="_blank"
                rel="noreferrer"
                style={pdfButton}
              >
                📄 Open PDF
              </a>
            )}

            {/* VIDEO */}
            {item.contentType === "video" && item.content && (
              <iframe
                width="100%"
                height="420"
                src={getVideoUrl(item.content)}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "10px",
                }}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

/* STYLES */

const container = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "20px",
};

const header = {
  textAlign: "center",
  marginBottom: "20px",
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  marginTop: "20px",
};

const meta = {
  display: "flex",
  gap: "15px",
  fontSize: "13px",
  color: "gray",
  marginTop: "8px",
  flexWrap: "wrap",
};

const text = {
  whiteSpace: "pre-wrap",
  lineHeight: "1.8",
  fontSize: "15px",
};

const pdfButton = {
  display: "inline-block",
  padding: "10px 15px",
  background: "#2563eb",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
};

export default NoteViewer;

