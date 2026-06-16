function TrainingReports() {
  const reports = [
    "4 Weeks Industrial Training Report",
    "6 Weeks Industrial Training Report",
    "Internship Final Report",
    "Daily Work Log Format",
    "Weekly Progress Report",
    "Project Training Report",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        🏭 Training Reports
      </h1>

      <p className="text-gray-600 mb-8">
        Report formats and guidelines for internships,
        industrial training and project work.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <ul className="space-y-3">
          {reports.map((report, index) => (
            <li
              key={index}
              className="border rounded-lg p-3 bg-gray-50"
            >
              {report}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">
          📌 Report Structure
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Cover Page</li>
          <li>Certificate</li>
          <li>Acknowledgement</li>
          <li>Company Profile</li>
          <li>Technology Used</li>
          <li>Work Done</li>
          <li>Learning Outcomes</li>
          <li>Conclusion</li>
        </ul>
      </div>
    </div>
  );
}

export default TrainingReports;