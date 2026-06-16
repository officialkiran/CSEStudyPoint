import { useState } from "react";
import API from "../../services/api";
import subjectsData from "../../data/subjectsData";

function AddVideo() {
  const [form, setForm] = useState({
    semester: "1",
    subject: "",
    chapter: "",
    title: "",
    videoUrl: "",
    category: "Videos",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "semester") {
      setForm({
        ...form,
        semester: value,
        subject: "",
        chapter: "",
      });
    } 
    else if (name === "subject") {
      setForm({
        ...form,
        subject: value,
        chapter: "",
      });
    } 
    else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/resources", {
        semester: form.semester,
        subject: form.subject,
        chapter: form.chapter,
        category: form.category,
        title: form.title,

        contentType: "video",
        content: form.videoUrl,
      });

      alert("✅ Video Added Successfully");

      setForm({
        semester: "1",
        subject: "",
        chapter: "",
        title: "",
        videoUrl: "",
        category: "Videos",
      });

    } catch (err) {
      console.error(err);
      alert("❌ Failed to add video");
    }
  };

  const subjects = subjectsData[form.semester]
    ? Object.keys(subjectsData[form.semester])
    : [];

  const chapters =
    form.subject &&
    subjectsData[form.semester]?.[form.subject]
      ? subjectsData[form.semester][form.subject]
      : [];

  return (
    <div style={box}>
      <h2>🎥 Add Video</h2>

      {/* SEMESTER */}
      <select name="semester" value={form.semester} onChange={handleChange} style={input}>
        {Object.keys(subjectsData).map((sem) => (
          <option key={sem} value={sem}>
            Semester {sem}
          </option>
        ))}
      </select>

      {/* SUBJECT */}
      <select name="subject" value={form.subject} onChange={handleChange} style={input}>
        <option value="">Select Subject</option>
        {subjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* CHAPTER */}
      <select name="chapter" value={form.chapter} onChange={handleChange} style={input}>
        <option value="">Select Chapter</option>
        {chapters.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* TITLE */}
      <input
        type="text"
        name="title"
        placeholder="Video Title"
        value={form.title}
        onChange={handleChange}
        style={input}
      />

      {/* VIDEO LINK */}
      <input
        type="text"
        name="videoUrl"
        placeholder="YouTube Video URL"
        value={form.videoUrl}
        onChange={handleChange}
        style={input}
      />

      <button onClick={handleSubmit} style={btn}>
        Add Video
      </button>
    </div>
  );
}

/* STYLES */
const box = {
  maxWidth: "600px",
  margin: "40px auto",
  padding: "25px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

export default AddVideo;