
import { useState } from "react";
import API from "../services/api";

function Admin() {
  // Notes Form
  const [formData, setFormData] = useState({
    semester: "",
    subject: "",
    chapter: "",
    title: "",
    type: "note",
    content: "",
  });

  // Placement Form
  const [placementData, setPlacementData] = useState({
    category: "Report Formats",
    title: "",
    pdf: "",
  });

  // Notes Handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/notes", formData);

      alert("Note Added Successfully!");

      setFormData({
        semester: "",
        subject: "",
        chapter: "",
        title: "",
        type: "note",
        content: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Placement Handlers
  const handlePlacementChange = (e) => {
    setPlacementData({
      ...placementData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlacementSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/placement", placementData);

      alert("Placement Resource Added!");

      setPlacementData({
        category: "Report Formats",
        title: "",
        pdf: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
      }}
    >
      <h1>Admin Dashboard</h1>

      {/* NOTES SECTION */}
      <h2>📚 Add Notes</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="chapter"
          placeholder="Chapter"
          value={formData.chapter}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="note">Text Note</option>
          <option value="pdf">PDF</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
          <option value="pyq">PYQ</option>
        </select>

        <br /><br />

        <textarea
          name="content"
          rows="10"
          placeholder="Enter content"
          value={formData.content}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Content
        </button>
      </form>

      <hr style={{ margin: "50px 0" }} />

      {/* PLACEMENT SECTION */}
      <h2>🚀 Placement Resources</h2>

      <form onSubmit={handlePlacementSubmit}>
        <select
          name="category"
          value={placementData.category}
          onChange={handlePlacementChange}
        >
          <option value="Report Formats">
            Report Formats
          </option>

          <option value="Resume Templates">
            Resume Templates
          </option>

          <option value="Documents">
            Documents
          </option>

          <option value="Interview Prep">
            Interview Prep
          </option>

          <option value="Project Ideas">
            Project Ideas
          </option>

          <option value="Downloads">
            Downloads
          </option>
        </select>

        <br /><br />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={placementData.title}
          onChange={handlePlacementChange}
        />

        <br /><br />

        <input
          type="text"
          name="pdf"
          placeholder="/uploads/placement/file.pdf"
          value={placementData.pdf}
          onChange={handlePlacementChange}
        />

        <br /><br />

        <button type="submit">
          Add Placement Resource
        </button>
      </form>
    </div>
  );
}

export default Admin;

