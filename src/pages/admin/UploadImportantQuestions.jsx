import { useState } from "react";
import API from "../../services/api";
import subjectsData from "../../data/subjectsData";

function uplodeImportantQuestions() {
  const [form, setForm] = useState({
    semester: "1",
    subject: "",
    chapter: "",
    title: "",
    content: "",
    category: "Important Questions",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "semester") {
      setForm({ ...form, semester: value, subject: "", chapter: "" });
    } else if (name === "subject") {
      setForm({ ...form, subject: value, chapter: "" });
    } else {
      setForm({ ...form, [name]: value });
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
        contentType: "text",
        content: form.content,
      });

      alert("✅ Important Questions Uploaded Successfully");

      setForm({
        semester: "1",
        subject: "",
        chapter: "",
        title: "",
        content: "",
        category: "Important Questions",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
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
      <h2>📌 Upload Important Questions</h2>

      {/* Semester */}
      <select name="semester" value={form.semester} onChange={handleChange} style={input}>
        {Object.keys(subjectsData).map((sem) => (
          <option key={sem} value={sem}>
            Semester {sem}
          </option>
        ))}
      </select>

      {/* Subject */}
      <select name="subject" value={form.subject} onChange={handleChange} style={input}>
        <option value="">Select Subject</option>
        {subjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* Chapter */}
      <select name="chapter" value={form.chapter} onChange={handleChange} style={input}>
        <option value="">Select Chapter</option>
        {chapters.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Title */}
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title (e.g. Most Important Questions)"
        style={input}
      />

      {/* Content */}
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Write important concepts / questions here..."
        rows="8"
        style={input}
      />

      <button onClick={handleSubmit} style={btn}>
        Save Important Questions
      </button>
    </div>
  );
}

/* Styles */
const box = {
  maxWidth: "650px",
  margin: "40px auto",
  padding: "25px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default uplodeImportantQuestions;