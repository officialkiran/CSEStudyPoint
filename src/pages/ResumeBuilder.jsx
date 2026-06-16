function ResumeBuilder() {
  const sections = [
    "Personal Information",
    "Career Objective",
    "Education",
    "Technical Skills",
    "Projects",
    "Internships",
    "Certifications",
    "Achievements",
    "Extra Curricular Activities",
    "Contact Information",
  ];

  const tips = [
    "Keep your resume to 1 page if you are a fresher.",
    "Use ATS-friendly formatting.",
    "Mention technologies used in projects.",
    "Add GitHub and LinkedIn profile links.",
    "Avoid spelling and grammar mistakes.",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        📄 Resume Builder
      </h1>

      <p className="text-gray-600 mb-8">
        Learn how to create a professional ATS-friendly resume
        for internships and placements.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Resume Sections
        </h2>

        <ul className="space-y-3">
          {sections.map((section, index) => (
            <li
              key={index}
              className="border rounded-lg p-3 bg-gray-50"
            >
              {section}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-green-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          💡 Resume Tips
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeBuilder;