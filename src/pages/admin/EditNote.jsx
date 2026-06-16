import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import subjectsData from "../../data/subjectsData";

function EditNote() {
  const { id } = useParams();

  const [form, setForm] = useState({
    semester: "1",
    subject: "",
    chapter: "",
    title: "",
    content: "",
    category: "Theory Notes",
  });

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      // ✅ FIXED: fetch single item (not all)
      const res = await API.get(`/resources/${id}`);
      const note = res.data;

      if (note) {
        setForm({
          semester: note.semester || "1",
          subject: note.subject || "",
          chapter: note.chapter || "",
          title: note.title || "",
          content: note.content || "",
          category: note.category || "Theory Notes",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "semester") {
      setForm({ ...form, semester: value, subject: "", chapter: "" });
    } 
    else if (name === "subject") {
      setForm({ ...form, subject: value, chapter: "" });
    } 
    else {
      setForm({ ...form, [name]: value });
    }
  };

  const updateNote = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/resources/${id}`, form);

      alert("✅ Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("❌ Update Failed");
    }
  };

  // dropdown data
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
      <h2>✏️ Edit Resource</h2>

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
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        style={input}
      />

      {/* CONTENT */}
      <textarea
        rows="8"
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        style={input}
      />

      <button onClick={updateNote} style={btn}>
        Save Changes
      </button>
    </div>
  );
}

/* STYLES */
const box = {
  maxWidth: "700px",
  margin: "40px auto",
  padding: "20px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
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

export default EditNote;