import { useState } from "react";
import API from "../../services/api";
import subjectsData from "../../data/subjectsData";

function UploadPDF() {
  const [form, setForm] = useState({
    semester: "1",
    subject: "",
    chapter: "",
    title: "",
    category: "PDF Notes",
  });

  const [file, setFile] = useState(null);

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

  const upload = async () => {
    if (!file) {
      return alert("⚠ Please select a PDF");
    }

    if (!form.semester || !form.subject || !form.chapter) {
      return alert("⚠ Please select semester, subject, chapter");
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      // 1️⃣ Upload PDF file
      const uploadRes = await API.post(
        "/admin/upload-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const fileUrl = uploadRes.data.fileUrl;

      // 2️⃣ Save in DB (IMPORTANT: SAME SYSTEM)
      await API.post("/resources", {
        semester: form.semester,
        subject: form.subject,
        chapter: form.chapter,
        category: form.category,
        title: form.title,
        contentType: "pdf",
        fileUrl,
      });

      alert("✅ PDF Uploaded Successfully");

      setForm({
        semester: "1",
        subject: "",
        chapter: "",
        title: "",
        category: "PDF Notes",
      });

      setFile(null);

    } catch (err) {
      console.error(err);
      alert("❌ Upload failed");
    }
  };

  // SUBJECTS
  const subjects = subjectsData[form.semester]
    ? Object.keys(subjectsData[form.semester])
    : [];

  // CHAPTERS
  const chapters =
    form.subject &&
    subjectsData[form.semester]?.[form.subject]
      ? subjectsData[form.semester][form.subject]
      : [];

  return (
    <div style={box}>
      <h2>📄 Upload PDF Notes</h2>

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
        placeholder="PDF Title"
        value={form.title}
        onChange={handleChange}
        style={input}
      />

      {/* FILE */}
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        style={input}
      />

      {/* BUTTON */}
      <button onClick={upload} style={btn}>
        Upload PDF
      </button>
    </div>
  );
}

/* STYLES */
const box = {
  maxWidth: "600px",
  margin: "40px auto",
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const btn = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default UploadPDF;