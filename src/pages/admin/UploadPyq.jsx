import { useState } from "react";
import API from "../../services/api";
import subjectsData from "../../data/subjectsData";

function UploadPyq() {
  const [form, setForm] = useState({
    semester: "1",
    subject: "",
    chapter: "",
    title: "",
    year: "",
    content: "",
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
    } else if (name === "subject") {
      setForm({
        ...form,
        subject: value,
        chapter: "",
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/notes", {
        semester: form.semester,
        subject: form.subject,
        chapter: form.chapter,
        category: "PYQ",
        title: form.title,
        year: form.year,
        contentType: "text",
        content: form.content,
        fileUrl: "",
      });

      alert("✅ PYQ Uploaded Successfully");

      setForm({
        semester: "1",
        subject: "",
        chapter: "",
        title: "",
        year: "",
        content: "",
      });
    } catch (err) {
      console.log(err);
      alert("❌ Upload Failed");
    }
  };

  const subjects =
    subjectsData[form.semester]
      ? Object.keys(subjectsData[form.semester])
      : [];

  const chapters =
    form.subject && subjectsData[form.semester]?.[form.subject]
      ? subjectsData[form.semester][form.subject]
      : [];

  return (
    <div style={container}>
      <h2>📘 Upload PYQ (Text Only)</h2>

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
        {subjects.map((sub) => (
          <option key={sub} value={sub}>
            {sub}
          </option>
        ))}
      </select>

      {/* CHAPTER */}
      <select name="chapter" value={form.chapter} onChange={handleChange} style={input}>
        <option value="">Select Chapter</option>
        {chapters.map((ch) => (
          <option key={ch} value={ch}>
            {ch}
          </option>
        ))}
      </select>

      {/* TITLE */}
      <input
        name="title"
        placeholder="PYQ Title"
        value={form.title}
        onChange={handleChange}
        style={input}
      />

      {/* YEAR */}
      <input
        name="year"
        placeholder="Exam Year (e.g. 2024)"
        value={form.year}
        onChange={handleChange}
        style={input}
      />

      {/* CONTENT */}
      <textarea
        name="content"
        placeholder="Enter PYQ content here..."
        value={form.content}
        onChange={handleChange}
        style={textarea}
      />

      <br /><br />

      <button onClick={handleSubmit} style={button}>
        🚀 Upload PYQ
      </button>
    </div>
  );
}

/* STYLES */
const container = {
  maxWidth: "600px",
  margin: "40px auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};

const textarea = {
  width: "100%",
  height: "180px",
  padding: "10px",
  marginBottom: "10px",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
};

export default UploadPyq;