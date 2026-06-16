function PlacementPreparation() {
  const topics = [
    {
      title: "🧠 Aptitude",
      items: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "Verbal Ability",
        "Data Interpretation",
      ],
    },
    {
      title: "💻 Data Structures & Algorithms",
      items: [
        "Arrays",
        "Linked Lists",
        "Stacks & Queues",
        "Trees & Graphs",
        "Dynamic Programming",
      ],
    },
    {
      title: "🗄 DBMS",
      items: [
        "SQL Queries",
        "Normalization",
        "Joins",
        "Transactions",
        "Indexing",
      ],
    },
    {
      title: "⚙ Operating Systems",
      items: [
        "Processes & Threads",
        "CPU Scheduling",
        "Deadlocks",
        "Memory Management",
      ],
    },
    {
      title: "🌐 Computer Networks",
      items: [
        "OSI Model",
        "TCP/IP",
        "HTTP & HTTPS",
        "DNS",
        "Routing",
      ],
    },
    {
      title: "☕ OOPs",
      items: [
        "Classes & Objects",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Encapsulation",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        💼 Placement Preparation
      </h1>

      <p className="text-gray-600 mb-8">
        Important topics every CSE student should prepare
        before placements and interviews.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {topic.title}
            </h2>

            <ul className="space-y-2">
              {topic.items.map((item, i) => (
                <li
                  key={i}
                  className="border rounded-lg p-2 bg-gray-50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">
          🎯 Placement Strategy
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Practice aptitude daily.</li>
          <li>Solve DSA problems regularly.</li>
          <li>Revise DBMS, OS, CN and OOPs concepts.</li>
          <li>Build strong projects.</li>
          <li>Prepare for HR interviews.</li>
        </ul>
      </div>
    </div>
  );
}

export default PlacementPreparation;