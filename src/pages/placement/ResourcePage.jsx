import { useParams } from "react-router-dom";

const pages = {
  "report-formats": {
    title: "📄 Report Formats",
    description:
      "Templates and guidelines for internship and training reports.",
    points: [
      "Internship Final Report Format",
      "Weekly Progress Report",
      "Daily Work Log",
      "Industrial Training Report",
      "Project Report Format",
    ],
    tips: [
      "Use a professional cover page",
      "Include certificate and acknowledgement",
      "Add screenshots of work completed",
      "Write conclusions and learning outcomes",
    ],
  },

  "resume-templates": {
    title: "📝 Resume Templates",
    description:
      "Professional resumes for placements and internships.",
    points: [
      "ATS-Friendly Resume",
      "Fresher Resume Format",
      "Software Developer Resume",
      "Resume Writing Tips",
      "Common Resume Mistakes",
    ],
    tips: [
      "Keep resume to one page",
      "Highlight technical skills",
      "Add projects with technologies used",
      "Avoid spelling and grammar mistakes",
    ],
  },

  documents: {
    title: "📜 Documents",
    description:
      "Useful academic and placement-related documents.",
    points: [
      "Bonafide Certificate",
      "No Objection Certificate (NOC)",
      "Character Certificate",
      "Internship Completion Certificate",
      "Recommendation Letter Format",
    ],
    tips: [
      "Keep scanned copies ready",
      "Use official college letterheads",
      "Verify signatures before submission",
    ],
  },

  "interview-prep": {
    title: "🎤 Interview Preparation",
    description:
      "Prepare for HR and technical interviews.",
    points: [
      "Tell Me About Yourself",
      "Strengths and Weaknesses",
      "DBMS Interview Questions",
      "OOPs Interview Questions",
      "Networking Basics Questions",
    ],
    tips: [
      "Practice mock interviews",
      "Revise core CS subjects",
      "Prepare project explanations",
      "Be confident and clear",
    ],
  },

  "project-ideas": {
    title: "💻 Project Ideas",
    description:
      "Mini and major project ideas for CSE students.",
    points: [
      "Cloud Storage System",
      "Student Management System",
      "Online Quiz Platform",
      "AI Chatbot",
      "Expense Tracker App",
    ],
    tips: [
      "Choose projects based on your interests",
      "Focus on real-world problems",
      "Maintain proper documentation",
      "Deploy projects online if possible",
    ],
  },

  downloads: {
    title: "📥 Downloads",
    description:
      "Helpful resources and templates.",
    points: [
      "Resume Templates",
      "Training Report Samples",
      "Certificate Formats",
      "Project Documentation Templates",
      "Interview Preparation Notes",
    ],
    tips: [
      "Download latest versions",
      "Keep backup copies",
      "Organize files by category",
    ],
  },
};

function ResourcePage() {
  const { category } = useParams();
  const page = pages[category];

  if (!page) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-red-500">
          ❌ Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="bg-blue-50 rounded-xl p-6 mb-6 shadow">
        <h1 className="text-4xl font-bold mb-3">
          {page.title}
        </h1>

        <p className="text-gray-700 text-lg">
          {page.description}
        </p>
      </div>

      {/* Contents */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          📚 Contents
        </h2>

        <ul className="space-y-3">
          {page.points.map((item, index) => (
            <li
              key={index}
              className="border rounded-lg p-3 bg-gray-50"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      {page.tips && (
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            💡 Tips
          </h2>

          <ul className="space-y-3">
            {page.tips.map((tip, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-yellow-50"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResourcePage;