import { useState } from "react";
import API from "../../services/api";

function AddPlacementResource() {
  const [formData, setFormData] = useState({
    category: "Report Formats",
    title: "",
    pdf: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      pdf: `/uploads/placement/${formData.pdf}`,
    };

    console.log("Sending:", payload);

    try {
      await API.post("/placement", payload);

      alert("Placement Resource Added!");

      setFormData({
        category: "Report Formats",
        title: "",
        pdf: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding resource");
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>🚀 Add Placement Resource</h1>

      <form onSubmit={handleSubmit}>
        {/* Category */}
        <select
  name="category"
  value={formData.category}
  onChange={handleChange}
>
  <option value="report-formats">Report Formats</option>
  <option value="resume-templates">Resume Templates</option>
  <option value="documents">Documents</option>
  <option value="interview-prep">Interview Prep</option>
  <option value="project-ideas">Project Ideas</option>
  <option value="downloads">Downloads</option>
</select>

        <br /><br />

        {/* Title (MISSING BEFORE — IMPORTANT FIX) */}
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        {/* PDF filename only */}
        <input
          type="text"
          name="pdf"
          placeholder="Enter file name (e.g. adhar.pdf)"
          value={formData.pdf}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Save Resource</button>
      </form>
    </div>
  );
}

export default AddPlacementResource;