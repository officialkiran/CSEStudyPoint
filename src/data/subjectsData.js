const subjectsData = {
  1: {
    "Applied Mathematics-1": [
      "Matrix Algebra",
      "Functions of several variables",
      "Complex Analysis",
      "Improper integrals",
    ],

    "Applied Physics-1": [
      "Simple harmonic motion",
      "Interference by division of amplitude",
      "Work, Energy & Power",
      "Wave Optics",
      "Thermodynamics",
    ],

    "Basic Electronics Engineering": [
      "Semiconductor Physics",
      "Diodes",
      "Transistors",
      "Logic Gates",
      "Number Systems",
    ],

    "Computer Programming": [
      "Number System",
      "Binary Arithmetic",
      "Introduction to C Language",
      "Control Structures",
      "Arrays",
      "Functions",
      "Object Oriented Concepts",
    ],

    "Manufacturing Processes": [
      "Introduction",
      "Metal Casting",
      "Machining Processes",
      "Machine Tools",
      "Welding & Joining",
    ],
  },

  2: {
    "Applied Mathematics-II": [
      "Differential equations",
      "Laplace Transforms",
      "Probability Distributions",
      "Infinite Series",
    ],

    "Digital Circuits & Logic Design": [
      "Number Systems and Codes ",
      "Logic gates and Boolean Algebra",
      "Combinational Logic Circuits",
      "Combinational digital IC packages",
      "Sequential Circuits",
      "Memories",
      "Digital to Analog and Analog to Digital Converters",
    ],

    "Object Oriented Programming Using C++": [
      "Introduction",
      "Classes and Objects",
      "Constructor and Destructor",
      "Operator Overloading",
      "Inheritance and Type Conversion",
      "Pointers and dynamic memory management ",
      "Polymorphism",
      "Exception Handling",
      "Managing Data Files",
      "Templates",
    ],

    "Applied Chemistry": [
      "Water & its Treatment",
      "Corrosion",      
      "Electrochemistry",
      "Lubricant",
      "UV-Visible spectroscopy",
      "IR",
      "Chromatography",
      "Polymers",
      "Thermodynamics",
    ],

    "Communication Skills": [
      "Communication",
      "Reading and Comprehension Skills",
      "Writing Skills",
      "Business Correspondence",
      "Listening Skills",
      "Grammar",
      "Speaking Skills",
    ],

    "Engineering Graphics": [
      "Introduction",
      "Projection",
      "Isometric Views",
      "Orthographic Views",
    ],
  },

  3: {
    "Python Programming": [
      "Introduction to Python",
      "Object types",
      "NumPy Basics",
      "Pandas",
      "Visualization",
    ],

    "Data Structures": [
      "Basic Data Structures and Operations",
      "Searching and Sorting",
      "Hashing ",
      "Trees",
      "Graphs and Their Application",
      "File Organization",
    ],

    "Computer Networks": [
      "Introduction",
      "Layered Architecture",
      "Physical Layer",
      "Transmission media",
      "Data Link Layer",
      "Network layer",
      "Transport layer",
      "Application layer",
    ],

    "Computer System Architecture": [
      "Introduction",
      "Basic Computer Organization and Design",
      "Controller Design",
      "Arithmetic Unit",
      "Memory Organization",
      "Input-Output Organization",
      "Pipeline Processing ",
    ],

    "Discrete Mathematical Structures": [
      "Relations and Functions",
      "Advanced Counting Techniques",
      "Graphs",
      "Mathematical Logic",
      "Algebraic Structures",
    ],
    "Environment & RoadSafty Awarness": [
      "INTRODUCTION TO ENVIRONMENTAL STUDIES",
      "ECOSYSTEM & BIODIVERSITY CONSERVATION",
      "NATURAL RESOURCES–RENEWABLE AND NON RENEWABLE RESOURCES",
      "Environmental Pollution",
      "ENVIRONMENTAL PROTECTION LAWS IN INDIA",
      "Human Communities and the Environment",
      "ROAD SAFETY AWARENESS",
      "Stubble Burning",
    ],
  },

  4: {
    "Algorithm Analysis & Design": [
      "Introduction",
      "Divide and Conquer",
      "Greedy Method",
      "Dynamic Programming",
      "Backtracking",
      "Lower Bound Theory",
      "Problem classes"
    ],
    "Operating Systems": [
      "Computer System Overview",
      "Operating system overview",
      "Operating System Structure and Operations",
      "Processes",
      "CPU Scheduling",
      "Threads",
      "Process Synchronization",
      "Deadlock",
      "Main Memory",
      "Virtual Memory",
      "Mass Storage System",
      "File-System Interface",
      "File System Implementation",
      "I/O System"
    ],

    "Database Management Systems": [
      "Introduction to Database Concepts",
      "Data Models",
      "Query Processing",
      "Relational Query Languages",
      "Database Design: Integrity Constraints",
      "Functional dependencies",
      "Query Optimization",
      "Joining Data from Multiple Tables",
    ],

    "Software Engineering": [
      "Introduction to Software Engineering",
      "Software Requirement Analysis and Specification",
      "Software Project Planning",
      "Function oriented design",
      "Object Oriented Design",
      "Coding",
      "Testing",
    ],
    "RUG ABUSE: PROBLEM, MANAGEMENT AND PREVENTION": [
      "Problem of Drug Abuse: Concept and Overview; Types of Drug Often Abused",
      "Causes and Consequences of Drug Abuse",
      "Nature of the Problem",
      "Management & Prevention of Drug Abuse",
    ],
     "E-commerce": [
      "Introduction",
      "Network Infrastructure for E- Commerce",
      "Mobile Commerce",
      "Electronic payment System",
      "Internet Marketing",
    ],
  },

  5: {
    "Java Programming": [
      "Introduction to Java",
      "Introduction to Classes",
      "Inheritance",
      "Exception Handling",
      "Multithreading",
      "I/O",
      "Applets and Graphics",
      "JDBC programming",
    ],

    "Artificial Intelligence": [
      "Introduction",
      "Intelligent agents",
      "Problem solving using search",
      "Knowledge representation",
      "Rule based systems",
      "Reasoning",
      "Subsets of artificial intelligence",
      "Languages for artificial intelligence problem solving",
    ],

    "Theory of Computation": [
      "Sets, Relations and Languages",
      "Finite Automata",
      "Grammar",
      "Regular Expression and Languages",
      "Context free Grammar and Languages",
      "Properties of Context free languages",
      "Pushdown Automata",
      "Turing Machines",
      "Cellular Automata",
    ],
     "RDBMS Using PL/SQL": [
      "Introduction of DBMS",
      "Distributed Databases and Client-Server Architecture",
      "PL/SQL",
      "Packages",
      "Database Security",
      "Transaction processing",
      "Concurrency control",
      "Big Data",
      
    ],
      "Network Security and Computer Forensics": [
      "Basic Encryption and Decryption",
      "Secret Key Systems",
      "Public Key Encryption Systems ",
      "Hash Algorithms",
      "Firewalls",
      "Introduction",
      "Digital Forensics",
      "Image Forensics",
    ],
  },

  6: {
    "Cloud Computing": [
      "OverviewofComputingParadigm",
      "Cloud Computing Architecture",
      "Security Challenges in Cloud Computing",
      "Cloud Computing Technologies",
      "Classification of Cloud Implementations",
      "Introduction about MOOC",

    ],

    "Machine Learning": [
      "Introduction to Machine Learning",
      "Data Pre-processing",
  "Supervised Learning",
  "Unsupervised Learning",
  "Dimensionality Reduction",
  "Artificial Neural Networks",
    ],

    "Compiler Design": [
      "Introduction To Compiling",
      "Syntax Analysis and Semantic Analysis",
      "Intermediate Code Generation",
      "Code Generation",
      "Code Optimization and Run Time Environments",
    
    ],
    "Mobile Apps Development": [
      "Android Fundamentals",
      "Application Components",
      "Building blocks of mobile apps",
      "App functionality beyond user interface",
      "Native data handling",
      "Testing mobile apps",
      "Taking apps to Market",
    ],
    "Computer Graphics": [
      "Graphics Hardware",
      "Raster Scan Conversion Algorithms",
      "Two-Dimensional Geometric Transformation",
      "Filling",
      "Windowing And Clipping",
      "Three-Dimensional Geometric Transformations",
      "Projections",
      "Visible Surface Detection Methods",
      "Shading",
        ],
    "Minor Project (Part-2)": [
      "Project",
      "Report",
      
    ],
  },

  7: {
    "Advanced Web Development": [
      "Introduction to Web Development",
      "JavaScript",
      "Server-Side Development",
      "Databases and Data Management",
      "Security and Performance",
      "Mobile Web Development",
    ],

    "Data Mining and Warehousing ": [
      "Introduction",
      "Data Pre-processing",
      "Data Warehouse and OLAP",
      "Introduction to Data Mining",
      "Mining Association Rules in Large Databases",
      "Classification and Prediction",
      "Cluster Analysis in Data Mining",
      "Introduction to Mining Complex Types of Data",
    ],
     "Digital Image Processing": [
      "Introduction and Digital Image Fundamentals",
      "Processing methods",
      "Discrete Fourier transform",
      "Color image models",
      "Image Restoration",
      "Image Compression",
      "Image Segmentation",
      "Image Representation",
    ],
  },

  8: {
    "Project Work": [
      "Final Project",
      "Documentation",
      "Presentation",
    ],
  },
};

export default subjectsData;