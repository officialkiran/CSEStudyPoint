import { useState } from "react";
import API from "../../services/api";
import subjectsData from "../../data/subjectsData";

function UploadImage() {
  const [form, setForm] = useState({
    semester: "1",
    subject: "",
    chapter: "",
    title: "",
    category: "Diagrams",
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
      return alert("⚠ Please select an image");
    }

    if (!form.semester || !form.subject || !form.chapter) {
      return alert("⚠ Please select semester, subject, chapter");
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      // 1️⃣ Upload file
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

      // 2️⃣ Save to DB (IMPORTANT: SAME COLLECTION SYSTEM)
      await API.post("/resources", {
        semester: form.semester,
        subject: form.subject,
        chapter: form.chapter,
        category: form.category,
        title: form.title,
        contentType: "image",
        fileUrl,
      });

      alert("✅ Image Uploaded Successfully");

      setForm({
        semester: "1",
        subject: "",
        chapter: "",
        title: "",
        category: "Diagrams",
      });

      setFile(null);

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
    <div style={container}>
      <h2>🖼 Upload Image</h2>

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

      {/* CATEGORY */}
      <select name="category" value={form.category} onChange={handleChange} style={input}>
        <option value="Diagrams">Diagrams</option>
        <option value="Charts">Charts</option>
        <option value="Architecture">Architecture</option>
      </select>

      {/* TITLE */}
      <input
        type="text"
        name="title"
        placeholder="Image Title"
        value={form.title}
        onChange={handleChange}
        style={input}
      />

      {/* FILE */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        style={input}
      />

      <button onClick={upload} style={btn}>
        Upload Image
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
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
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
};

export default UploadImage;