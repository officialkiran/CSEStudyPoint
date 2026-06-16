function CodingPractice() {
  const topics = [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "Recursion",
    "Dynamic Programming",
    "Greedy Algorithms",
    "Backtracking",
    "Searching & Sorting",
  ];

  const platforms = [
    "LeetCode",
    "GeeksforGeeks",
    "HackerRank",
    "CodeChef",
    "Codeforces",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        💻 Coding Practice
      </h1>

      <p className="text-gray-600 mb-8">
        Improve your coding skills and prepare for technical interviews.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* DSA Topics */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            📚 DSA Topics
          </h2>

          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Platforms */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            🌐 Practice Platforms
          </h2>

          <ul className="space-y-2">
            {platforms.map((platform, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 bg-gray-50"
              >
                {platform}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-green-50 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">
          🎯 Coding Tips
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Solve at least 2-3 problems daily.</li>
          <li>Focus on problem-solving rather than memorizing solutions.</li>
          <li>Practice topic-wise before contests.</li>
          <li>Revise important patterns regularly.</li>
          <li>Participate in coding contests.</li>
        </ul>
      </div>
    </div>
  );
}

export default CodingPractice;