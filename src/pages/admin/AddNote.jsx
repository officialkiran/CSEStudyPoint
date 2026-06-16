import { useState } from "react";
import API from "../../services/api";
import subjectsData from "../../data/subjectsData";

function AddNote() {
  const [form, setForm] = useState({
    semester: "1",
    subject: "",
    chapter: "",
    category: "Theory Notes",
    title: "",
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
        semester: form.semester.trim(),
        subject: form.subject.trim(),
        chapter: form.chapter.trim(),
        category: form.category.trim(),
        title: form.title.trim(),
        content: form.content.trim(),
        contentType: "text",
      });

      alert("✅ Resource Added Successfully");

      setForm({
        semester: "1",
        subject: "",
        chapter: "",
        category: "Theory Notes",
        title: "",
        content: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add resource");
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
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "25px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "20px",
        }}
      >
        ➕ Add New Resource
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Semester */}
        <select
          name="semester"
          value={form.semester}
          onChange={handleChange}
          style={inputStyle}
        >
          {Object.keys(subjectsData).map((sem) => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select>

        {/* Subject */}
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Subject</option>

          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>

        {/* Chapter */}
        <select
          name="chapter"
          value={form.chapter}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Chapter</option>

          {chapters.map((chapter) => (
            <option key={chapter} value={chapter}>
              {chapter}
            </option>
          ))}
        </select>

        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Theory Notes">Theory Notes</option>
          <option value="Diagrams">Diagrams</option>
          <option value="Charts">Charts</option>
          <option value="Architecture">Architecture</option>
          <option value="PYQs">PYQs</option>
          <option value="Important Questions">
            Important Questions
          </option>
          <option value="Videos">Videos</option>
          <option value="PDF Notes">PDF Notes</option>
        </select>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Enter content..."
          value={form.content}
          onChange={handleChange}
          rows="8"
          style={textareaStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Add Content
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "10px",
};

export default AddNote;