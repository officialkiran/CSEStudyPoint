function InterviewQuestions() {
  const hrQuestions = [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Where do you see yourself in 5 years?",
  ];

  const technicalQuestions = [
    "What is OOPs?",
    "Difference between C and C++?",
    "What is DBMS?",
    "What is Normalization?",
    "Explain OSI Model.",
    "Difference between Stack and Queue?",
    "What is React?",
    "What is Node.js?",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        🎤 Interview Questions
      </h1>

      <p className="text-gray-600 mb-8">
        Frequently asked HR and Technical Interview Questions
        for placements and internships.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* HR Questions */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            👨‍💼 HR Questions
          </h2>

          <ul className="space-y-2">
            {hrQuestions.map((question, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Questions */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            💻 Technical Questions
          </h2>

          <ul className="space-y-2">
            {technicalQuestions.map((question, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">
          💡 Interview Tips
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Maintain eye contact.</li>
          <li>Be confident and polite.</li>
          <li>Know your resume thoroughly.</li>
          <li>Explain your projects clearly.</li>
          <li>Practice mock interviews.</li>
        </ul>
      </div>
    </div>
  );
}

export default InterviewQuestions;