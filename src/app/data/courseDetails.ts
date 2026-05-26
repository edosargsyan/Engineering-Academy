export const courseDetails = {

   "Computer Architecture": {
  "title": "Computer Architecture Engineering",
  "duration": "15 month",
  "level": "Advanced",
  "technologies": ["RISC-V", "ARM ISA", "x86 ASM", "MIPS", "Verilog", "Cache Coherence", "CUDA", "TPU/NPU Architecture"],
  "description": "Advanced research-level course detailing CPU microarchitecture pipeline design, hazard handling forwarding mechanism, cache coherence protocol management, hardware AI acceleration, and system level vulnerability analysis.",
  "outcomes": [
    "Model multi-stage instruction pipeline architecture including hazard stall detection and branch prediction logic design",
    "Analyze Cache mapping scheme layout and formulate mathematical hit rate equation for memory system hierarchy performance evaluation",
    "Develop custom parallel computing multi-core hardware block mapping structure following SIMD/MIMD processing taxonomy",
    "Design CPU execution control path unit inside Verilog description layout using hardwired or microprogrammed design matrix",
    "Evaluate hardware memory virtualization abstraction layout using custom Memory Management Unit (MMU) address translation page map",
    "Incorporate advanced system security architecture layout blocking hardware side-channel attack and enabling cryptographically verified Secure Boot routine"
  ],
  "modules": [
    {
      "title": "Module 1 - Digital Foundations",
      "topics": [
        "Binary number mapping code base, Hexadecimal translation value table, and Signed/Unsigned number variable logic allocation [cite: 4, 5, 6]",
        "Two's Complement sign inversion mathematical formatting rule and Floating Point Basics IEEE 754 standard representation configuration model [cite: 7, 8]",
        "Logic function operation rules: AND truth matrix, OR logic function node, XOR logic evaluation cell, NAND universal logic gate block, and NOR gate circuit transformation [cite: 12, 13, 14, 15, 16]",

      ]
    },
    {
      "title": "Module 2  - CPU Fundamentals",
      "topics": [
        "Arithmetic Logic Unit (ALU) arithmetic flag calculation block, Control Unit state decoder block layout, and Internal Microprocessor Register file workspace structure [cite: 34, 35, 36]",
        "Program Counter (PC) instruction pointer update circuit track, Instruction Register (IR) instruction fetch memory latch, Datapath internal pipeline execution wire track, and Instruction Set Architecture (ISA) software-hardware link boundary abstraction layer [cite: 37, 38, 39, 40]",
        "RISC vs CISC execution instruction density philosophical comparison matrix, ARM instruction set architecture format profile, and x86 complex instruction hardware legacy decoder architecture [cite: 44, 45, 46]",
      ]
    },
    {
      "title": "Module 3 - CPU Execution",
      "topics": [
        "Fetch stage memory code pointer address lookup phase, Decode stage opcode field analysis register translation phase, and Execute stage ALU calculation operation phase [cite: 67, 68, 69]",
        "Memory Access stage data RAM read write operand cache cycle and Write Back stage output results value tracking update register file array phase [cite: 70, 71]",
      ]
    },
    {
      "title": "Module 4   Pipelining",
      "topics": [
        "Instruction pipelining optimization overlapping execution layout model, Pipeline stage division boundary registers alignment configuration layout, and Hazard structural data dependency hazard taxonomy recognition layout system [cite: 83, 84]",
        "Pipeline Stall clock cycle pause insert logic code pattern, Forwarding datapath bypass multiplexer route controller circuit logic [cite: 85, 86]",
       
      ]
    },
    {
      "title": "Module 5  - Memory Systems",
      "topics": [
        "Core Microprocessor Register storage file layer, Cache memory high-speed static lookup buffer layer layout configuration, and RAM dynamic primary working memory storage matrix layout [cite: 99, 100, 101]",
        "ROM non-volatile bootloader storage code section layout, Virtual Memory page frame address map segmentation translation layer, and Storage system solid-state non-volatile secondary device driver layout controller [cite: 102, 103, 104]",
        "Cache mapping address block association organization layout scheme, Direct mapped cache index tag collision lookup logic layer, and Associative cache set tag parallel comparison logic structure network [cite: 107, 108, 109]",
        "Cache coherence multiprocessor snooping MESI protocol hardware conflict resolution manager, and Cache performance efficiency evaluation hit rate formula tracking framework model: Hit Rate = Cache Hits / Total Accesses calculation equation [cite: 110, 112]"
      ]
    },
    {
      "title": "Module 6  - Parallelism",
      "topics": [
        "SIMD single instruction multiple data processing vector execution hardware stream layout, MIMD multiple instruction multiple data independent execution processing grid architecture, and Multicore system shared interconnect die layer hardware layout configuration [cite: 116, 117, 118]",
        "Hyperthreading simultaneous multithreading execution instruction state context duplicate architecture logic layer model [cite: 119]",
        "Out-of-order execution dynamic hardware instruction scheduler dependency routing path layout model, Instruction scheduling reservation station window wake-up logic algorithm framework, and Reorder buffer (ROB) speculative state in-order commit queue matrix [cite: 122, 123, 124]",
        "Speculative execution branch prediction execution path hazard bypass commit discard controller logic layout [cite: 125]"
      ]
    },
    {
      "title": "Module 7  - Bus & Communication",
      "topics": [
        "Address bus instruction destination memory word location pointer line trace array, Data bus system word data transaction parallel wire trace routing network, and Control bus execution command strobe signal timing line synchronization grid [cite: 129, 130, 131]",
        "Direct Memory Access (DMA) peripheral engine bus master target high-speed data block transaction bypass controller [cite: 132]",
        "Interrupt request signal line prioritization exception service vector router management logic, Memory-mapped I/O hardware register target base memory segment block map pointer, and PCIe peripheral component interconnect high-speed differential lane data link interface [cite: 136, 137, 138]",
        "Universal Serial Bus (USB) endpoint package serial transaction controller core interface architecture layout, and SATA serial storage device controller bus protocol hardware attachment link framework interface [cite: 139, 140]"
      ]
    },
    {
      "title": "Module 8  - Operating System Interaction",
      "topics": [
        "System call hardware vector exception trapping transition instruction code routine, Privilege level user supervisor kernel space state controller variable ring security protection logic, and Memory Management Unit (MMU) physical translation layout page desk matrix loop tracker [cite: 145, 146, 147]",
        "Context switching register state frame push pull hardware automation loop sequence, and Interrupt handling vector table priority dispatch controller kernel routing link interface [cite: 148, 149]"
      ]
    },
    {
      "title": "Module 9  - Advanced CPU Design",
      "topics": [
        "ARM Cortex application processor performance profile pipeline design, Intel Core complex out-of-order execution decode matrix tracking, AMD Zen modular chiplet core design interconnect topology layout scheme, and Apple Silicon unified memory SoC system layout cache performance metric benchmark [cite: 153, 154, 155, 156]",
        "CUDA basic general purpose parallel programming compute programming construct grid model, Streaming multiprocessor hardware core thread warp scheduler layout block diagram configuration, and Parallel compute high-throughput floating point compute matrix grid optimization network [cite: 159, 160, 161]",
        "TPU tensor processing unit systolic array matrix multiplication structural design layout map, NPU neural processing unit weight block activation engine network distribution layer, Tensor acceleration custom math operational hardware block execution system, and Matrix multiplication hardware dedicated accumulator arithmetic vector path processing grid model [cite: 164, 165, 166, 167]"
      ]
    },
    {
      "title": "Module 10  - FPGA & Hardware Architecture",
      "topics": [
        "Look-Up Table (LUT) logic function cell array matrix routing, Block RAM (BRAM) synchronous dual-port memory block macro system layout, DSP block hardware multiply accumulate arithmetic operation unit grid configuration array, and Clock routing low-skew network phase lock loop distribution trace matrix scheme [cite: 172, 173, 174, 175]",
        "Verilog RTL design grammar standard modeling construct syntax code structure, SystemVerilog verification class structure interface simulation runtime verification configuration model, VHDL hardware description design architecture modeling standard rule set, and EDA compilation tool synthesis environment software suite workspace (AMD Xilinx Vivado workspace configuration matrix layout tracker, Intel Altera Quartus Prime project compile system layout tool) [cite: 178, 179, 180, 182, 183]"
      ]
    },
    {
      "title": "Module 11  - Performance Engineering",
      "topics": [
        "CPI clock cycle per instruction pipeline efficiency latency factor calculation, IPC instruction per clock execution throughput velocity performance measurement metric code, Latency instruction execution critical path propagation time delay tracking profile value, Throughput data bus transfer bandwidth calculation capacity index tracking map, Benchmarking workload performance execution verification standard analysis profile matrix, and System execution metric calculation formula engine code standard model profile tracking: CPU Time = Instruction Count * CPI * Clock Cycle Time calculation formulation [cite: 187, 188, 189, 190, 191, 193]",
        "Dynamic power switching frequency capacitance load dissipation calculation equation model formula, Static power leakage current subthreshold junction dissipation loss optimization matrix layout configuration, Thermal throttling clock source frequency division temperature safety controller tracking sensor circuit interface, and Voltage scaling dynamic voltage frequency management algorithm profile framework system [cite: 197, 198, 199]"
      ]
    },
    {
      "title": "Module 12 - Security Architecture",
      "topics": [
        "Secure boot cryptographically verified asymmetric signature authentication verification pipeline routine sequence flow chart model, TPM trusted platform module hardware cryptographic key safe store chip architecture layout configuration scheme, Side-channel attack differential power analysis electromagnetic radiation profile tracking protection design methodology, and Spectre/Meltdown basic speculative execution cache timing leakage vulnerability exploitation mitigation hardware re-engineering design parameter [cite: 204, 205, 206, 207]"
      ]
    },
    {
      "title": "Module 13 - Research-Level Topics",
      "topics": [
        "Quantum computing superposition logic qubit state computation hardware trap entanglement architecture system configuration, Neuromorphic computing spiking neural network synapse processing axon hardware layout node array design scheme, Optical computing photonic laser source waveguide routing light velocity data compute processing module layout configuration matrix model, and RISC-V ecosystem open source custom instruction extension development roadmap research path strategy layout [cite: 210]"
      ]
    }
  ]
},
 "JavaScript Engineering": {
  id: 1,
  title: "JavaScript Engineering",
  duration: "8-9 months",
  level: "Intermediate",
  technologies: ["JavaScript", "ES6+", "DOM", "Web APIs", "Node.js Basics"],
  description: "Master modern JavaScript, from core concepts and ES6+ to advanced DOM manipulation and Web APIs. Build a strong foundation for modern web development.",
  outcomes: [
    "Master modern JavaScript (ES6+) and advanced syntax",
    "Understand the DOM and Web APIs deep under the hood",
    "Master asynchronous programming and data fetching",
    "Build complex, interactive, and performant web applications",
    "Prepare for popular frontend framework ecosystems (React/Vue)",
    "Implement robust error handling and debugging techniques",
  ],
  modules: [
    {
      title: "Module 1 — Introduction & Digital Logic Design",
      topics: [
        "1. Number Systems and Codes",
        "2. Boolean Algebra",
        "3. Karnaugh Maps and Function Simplification",
        "4. Combinational Logic Design Principles",
        "5. Combinational Logic Design with MSI Circuits",
        "6. Latches and Flip-Flops",
        "7. Counters and Registers",
        "8. Clock-Driven Sequential Circuits",
        "9. Event-Driven Circuits",
        "10. Instrumentation and Interfacing",
        "11. Programmable Logic Devices",
        "12. Arithmetic Circuits",
        "13. Fault Diagnosis and Testing",
      ],
    },
    {
      title: "Module 2 — C Programming Core",
      topics: [
        "2. Variables and Data Types",
        "3. Operators",
        "4. Input and Output",
        "5. Conditions",
        "6. Loops",
        "7. Functions",
        "8. Arrays",
        "9. Strings",
        "10. Pointers",
        "11. Structures and Unions",
        "12. Dynamic Memory Allocation",
        "13. File Handling",
        "14. Preprocessor",
        "15. Advanced C",
        "16. Data Structures in C",
      ],
    },
    {
      title: "Module 3 — JavaScript Engineering",
      topics: [
        "1. JavaScript from low level perspective",
        "2. JavaScript Internals",
        "3. Functions In Memory",
        "4. Variable Lookup and Scope",
        "5. Variable Lookup and Closures",
        "6. Functional Programming",
        "7. Lexical Structure Of JS",
        "8. Objects from High Level",
        "9. V8 engine optimizations",
        "10. Philosophy of Object Oriented : Design",
        "11. Polymorphism and Context Invocation Details",
        "12. Prototypes and [[Prototypes]]",
        "13. Constructor Functions and Inheritance Internals",
        "14. Abstraction and Meta Programming",
        "15. SOLID and object oriented design",
        "16. Creational Design Patterns",
        "17. Structural Design Patterns",
        "18. Behavioral Design Patterns",
        "19. Process, Thread, Async",
        "20. Deep Drive Async"

      ],
      
    },
      {
      title: "Module 4 — Data Structures and Algorithms",
   topics: [
    "1. Introduction to Algorithms and Data Structures",
    "2-3. Solving LeetCode Problems (Two Pointers and other problem solving techniques)",
    "4. Insertion Sort and Counting Sort",
    "5. Quick Sort and Merge Sort",
    "6. Heaps and Priority Queues (Applying Sliding Window, Quick Select)",
    "7. Linked Lists",
    "8. Problem Solving (SLL, QS, SW)",
    "9. Single Linked List",
    "10. Double Linked List",
    "11. Hash Tables",
    "12. Binary Search Trees",
    "13. Binary Search Trees (Delete, DFS, BFS)",
    "14. Solving LeetCode (BFS, DFS)",
    "15. AVL Tree Introduction",
    "16. AVL Tree Implementation Details",
    "17. Red-Black Trees (Insertion)",
    "18. Red-Black Tree (Deletion)",
    "19. RB Trees (Delete Fixup)",
    "20. Graphs & Kahn's Algorithm (Topological Sorting)",
    "21. Dijkstra and Bellman-Ford (Shortest Path)",
    "22. Prim and Kruskal (Minimum Spanning Trees)",
    "23. Greedy Approach",
    "24. Dynamic Programming"
  ]
    },

    {
        title: "Module 5 — Frontend Development with React & TypeScript",
        topics: [
          "1. Introduction to React.js core concept",
          "2. Component, State, and Prop interaction",
          "3. JSX Syntax pattern and execution rule",
          "4. Advanced Frontend Programming flow",
          "5. Lifecycle Method and custom Hook paradigm",
          "6. Context API and State Management flow",
          "7. Creating Single Page Application (SPA)",
          "8. React Router configuration",
          "9. Performance Optimization architecture",
          "10. Code Splitting and Lazy Loading strategy",
          "11. React App Optimization metric",
          "12. SEO Fundamental for web layout",
          "13. Unit Testing configuration",
          "14. Integration Testing with React Testing Library",
          "15. Introduction to TypeScript and type system Fundamental",
          "16. Integrating TypeScript with React component layout"
        ]
      },
      
      {
        title: "Module 6 — Backend Development with Node.js & Express",
        topics: [
          "1. Introduction to Node.js runtime environment",
          "2. Module system and npm package controller",
          "3. Network Protocol standard execution",
          "4. Express.js framework and REST API routing",
          "5. RESTful API Principle layout",
          "6. HTTP Method standard configuration",
          "7. Route Handling tracking",
          "8. Middleware Function execution pipeline",
          "9. Error Handling architecture",
          "10. Authentication and Authorization system",
          "11. JWT and OAuth token architecture",
          "12. Introduction to Database: Low-Level Structure analysis",
          "13. Type of Database (SQL, NoSQL comparison)",
          "14. CRUD Operation in SQL and NoSQL environment",
          "15. Data Modeling Technique layout",
          "16. Integrating EJS template engine with Express.js",
          "17. Containerization, Introduction to Docker subsystem",
          "18. CI/CD Pipeline tracking flow"
        ]
      }
   
  ],
},

  "devHack": {
    title: "devHack",
    duration: "15 Months",
    level: "Advanced",
    technologies: ["Kubernetes", "AWS", "Terraform", "Docker", "CI/CD", "Discrete Math"],
    description: "Master infrastructure as code, container orchestration, and modern deployment pipelines. Learn to build, deploy, and maintain scalable cloud-native applications with a strong foundation in discrete mathematics, routing graph theory, and cryptographic numbers.",
    outcomes: [
      "Design cloud infrastructure with Terraform",
      "Deploy containerized applications with Kubernetes",
      "Apply Discrete Mathematics and Graph Theory to optimize complex network topologies",
      "Utilize Probability and Statistics for risk assessment, fault tolerance, and anomaly detection",
      "Understand Number Theory foundations behind modern cryptographic security and protocols",
      "Manage production incidents and automated cloud scaling using Queueing Theory statistics",
    ],
    modules: [
      {
        title: "Module 1 — Discrete Math & Statistical Foundations",
        topics: [
          "Logic and Propositional Calculus for System Architecture",
          "Set Theory, Combinatorics, and Counting Principles",
          "Graph Theory Foundations (Routing Algorithms, Network Trees, and Topologies)",
          "Probability Theory: Random Variables and Conditional Probability",
          "Probability Distributions in System Load and Network Traffic Modeling",
          
        ],
      },
      {
        title: "Module 2 — Systems & Core Networking",
        topics: [
          "Computer Architecture & Introduction to Operating Systems",
          "File Systems and Memory Management in Linux",
          "Data Representation at Low Level & System Programming",
          "Client-Server Architecture and Web Servers",
          "Load Balancing, Mail Servers, and Advanced Networking",
          "DNS, Transport Data Layer, and TCP/IP vs OSI Models",
          "Network Layer and Addressing Principles",
        ],
      },
      {
        title: "Module 3 — DevOps & Cloud Orchestration",
        topics: [
          "Infrastructure as Code (IaC) with Terraform",
          "Virtualization and Containerization (Docker)",
          "Ansible and Configuration Automation",
          "Kubernetes and Container Orchestration",
          "Continuous Integration and Continuous Deployment (CI/CD) Pipelines",
          "Monitoring, Continuous Delivery, and Cloud Computing (AWS)",
        ],
      },
      {
        title: "Module 4 — Cybersecurity & Cryptographic Math",
        topics: [
          "Fundamentals of Cybersecurity & Network Security Monitoring",
          "Cryptography and Data Security Foundations",
          "Number Theory for Encryption (Modular Arithmetic, Prime Numbers, RSA, Elliptic Curves)",
          "Basics of Penetration Testing and Operating System Security",
          
        ],
      },
    ],
  },
  
  "Embedded Systems": {
    title: "Embedded Systems",
    duration: "18 Weeks",
    level: "Advanced",
    technologies: ["C/C++", "RTOS", "Arduino", "ARM", "IoT"],
    description: "Develop firmware and IoT solutions for hardware devices and embedded platforms. Learn to program microcontrollers, work with sensors, and build connected devices.",
    outcomes: [
      "Program microcontrollers in C/C++",
      "Design and build IoT devices",
      "Work with real-time operating systems",
      "Interface with sensors and actuators",
      "Implement wireless communication protocols",
      "Debug hardware-software integration",
    ],
    modules: [
      {
        title: "Module 1 — Embedded Foundations",
        topics: [
          "C Programming for Embedded Systems",
          "Digital Logic & Binary Systems",
          "Microcontroller Architecture",
          "GPIO & Hardware Interfacing",
          "Reading Datasheets & Schematics",
          "Embedded Development Tools",
        ],
      },
      {
        title: "Module 2 — Arduino & Prototyping",
        topics: [
          "Arduino Platform Overview",
          "Sensors (Temperature, Motion, Light)",
          "Actuators (Motors, Servos, Relays)",
          "Serial Communication (UART, I2C, SPI)",
          "Analog & Digital I/O",
          "Project: Smart Home Device",
        ],
      },
      {
        title: "Module 3 — Advanced C/C++",
        topics: [
          "C++ for Embedded Systems",
          "Pointers & Memory Management",
          "Interrupts & Timers",
          "Direct Register Manipulation",
          "Power Management",
          "Code Optimization Techniques",
        ],
      },
      {
        title: "Module 4 — Real-Time Systems",
        topics: [
          "RTOS Concepts (FreeRTOS)",
          "Task Scheduling & Priorities",
          "Semaphores & Mutexes",
          "Inter-Task Communication",
          "Real-Time Constraints",
          "Debugging RTOS Applications",
        ],
      },
      {
        title: "Module 5 — IoT & Connectivity",
        topics: [
          "WiFi & Bluetooth Protocols",
          "MQTT & HTTP for IoT",
          "ESP32 Platform",
          "Cloud Integration (AWS IoT)",
          "Over-the-Air (OTA) Updates",
          "Security in IoT Devices",
        ],
      },
      {
        title: "Module 6 — Capstone Project",
        topics: [
          "PCB Design Basics",
          "Building a Complete IoT Product",
          "Sensor Fusion & Data Processing",
          "Mobile App Integration",
          "Production Testing & Validation",
          "Final Product Demonstration",
        ],
      },
    ],
  },

  // ... другие твои курсы (JavaScript, Embedded и т.д.)

  "Mathematics": {
    title: "Mathematics",
    duration: "16 Weeks",
    level: "Beginner to Intermediate",
    technologies: ["Algebra", "Geometry", "Trigonometry", "Vectors", "Coordinate Systems"],
    description: "A comprehensive foundational course combining Algebra and Geometry, designed to develop strong analytical thinking, geometric intuition, and problem-solving skills.",
   outcomes: [
      "Solve linear, quadratic, and rational equations and inequalities with absolute precision",
      "Analyze geometric properties, theorems, and proofs related to polygons and circles",
      "Execute vector calculations and apply trigonometric laws to solve real-world spatial problems",
      "Demonstrate advanced logical reasoning through formal proofs and mathematical modeling",
      "Synthesize algebraic and geometric methods to tackle complex interdisciplinary engineering challenges"
    ],
    modules: [
      {
        title: "Module 1: Algebra",
        topics: [
          "Short multiplication formulas and algebraic simplifications",
          "Linear equations in one variable and systems of two linear equations in two variables",
          "Linear inequalities in one variable and systems of linear inequalities",
          "Unions (collections) of linear equations and inequalities in one variable",
          "Solving equations and inequalities involving absolute values (modulus)",
          "Quadratic trinomials, quadratic equations, methods of solution, and Vieta's theorem",
          "Second-degree (quadratic) inequalities in one variable",
          "Concept of a function, linear and quadratic functions, intervals of increase, decrease, sign-preservation, and zeros of functions",
          "Rational equations and inequalities",
          "Systems of rational equations and graphical methods of solution",
          "Numerical sequences: arithmetic, geometric, and infinitely decreasing geometric progressions",
          "Word problems and mathematical modeling text challenges"
        ]
      },
      {
        title: "Module 2: Geometry",
        topics: [
          "Triangles and criteria for triangle congruence; medians, bisectors, and altitudes of a triangle; isosceles and equilateral triangles",
          "Parallel lines, criteria for parallelism, and theorems on angles formed by two parallel lines and a transversal",
          "Sum of angles of a triangle; acute, right, and obtuse triangles; relations between the sides and angles of a triangle, and the triangle inequality; properties of right triangles",
          "Polygons, parallelograms, trapezoids, rectangles, rhombuses, and squares",
          "Radius passing through the midpoint of a chord, tangents to a circle, central and inscribed angles; the four notable points of a triangle; inscribed and circumscribed circles, and regular polygons",
          "Area of polygons, the Pythagorean theorem, and metric relations between the sides and angles of a right triangle",
          "Coordinates of the midpoint of a segment; distance between two points by coordinates; equations of a line and a circle",
          "Concept of a vector, sum of two vectors, laws of vector addition, the parallelogram rule, sum of multiple vectors, vector subtraction, and multiplication of a vector by a scalar",
          "Decomposition of vectors along two non-collinear vectors, coordinates of a vector, and the angle between two vectors",
          "Proportional segments, definition of similar triangles, criteria for triangle similarity, and practical applications of similarity",
          "Sine, cosine, and tangent functions; fundamental trigonometric identities and reduction formulas; theorem on the area of a triangle, the Law of Sines, and the Law of Cosines",
          "Circumference of a circle, area of a circle, and the area of circular sectors and segments"
        ]
      }
    ]
  },


  

  "Physics": {
    title: "Physics",
    duration: "16 Weeks", 
    level: "Beginner to Intermediate",
    technologies: ["Mechanics", "Kinematics", "Dynamics", "Thermodynamics", "Electricity", "Magnetism", "Optics"],
    description: "A structured three-year foundational physics program covering classical mechanics, thermodynamics, electromagnetism, and optics. Designed to build rigorous problem-solving skills through theoretical analysis, physical modeling, and exploration of natural phenomena.",
    outcomes: [
      "Understand the fundamental laws of motion, kinematics, and dynamics",
      "Apply the concepts of mechanical work, power, and pressure to physical systems",
      "Analyze mechanical vibrations, waves, and acoustic phenomena",
      "Master the principles of electrical circuits, electromagnetic fields, and geometric optics"
    ],
    modules: [
      {
        title: "Module 1: 7th Grade Physics (Foundations of Mechanics & Pressure)",
        topics: [
          "Motion of Bodies (Kinematics basics, speed, and velocity)",
          "Work and Power (Mechanical work, energy, and efficiency)",
          "Pressure (Atmospheric pressure, pressure in liquids and gases, Pascal's law, and Archimedes' principle)"
        ]
      },
      {
        title: "Module 2: 8th Grade Physics (Advanced Mechanics & Wave Phenomena)",
        topics: [
          "Kinematics (Displacement, uniform and non-uniform acceleration, free fall)",
          "Dynamics (Newton's laws of motion, forces in nature, friction, gravity)",
          "Statics (Equilibrium of bodies, torque, levers, and simple machines)",
          "Mechanical Oscillations and Waves (Vibrations, pendulum motion, wave propagation, and sound)"
        ]
      },
      {
        title: "Module 3: 9th Grade Physics (Electricity, Magnetism & Optics)",
        topics: [
          "Electrical Phenomena (Electric charge, current, voltage, resistance, Ohm's law, and circuits)",
          "Electromagnetic Phenomena (Magnetic fields, permanent magnets, electromagnets, and electromagnetic induction)",
          "Optical Phenomena (Light propagation, reflection, refraction, mirrors, lenses, and geometric optics)"
        ]
      }
    ]
  },
  
  "AI Engineering": {
    title: "AI Engineering",
    duration: "12-14 months",
    level: "Advanced",
    technologies: ["Python", "TensorFlow", "LangChain", "Vector DBs", "OpenAI", "Calculus", "Linear Algebra"],
    description: "Build intelligent applications with machine learning, large language models, and AI-powered systems. Learn to integrate cutting-edge AI into production applications backed by rigorous mathematical foundations.",
    outcomes: [
      "Build production AI applications and APIs",
      "Work with large language models (GPT, Claude) and LangChain",
      "Implement RAG systems with vector databases",
      "Train and deploy machine learning models using advanced statistical frameworks",
      "Apply probability distributions and statistical inference to data models and neural networks",
      "Master the linear algebra and matrix optimization techniques behind backpropagation",
    ],
    modules: [
      {
        title: "Module 1 — Mathematical Foundations for AI",
        topics: [
          "Linear Algebra: Vectors, Multi-Dimensional Vector Spaces, Matrix Algebra & Operations",
          "Determinants, Inverses, Eigenvalues, Eigenvectors, and Singular Value Decomposition (SVD)",
          "Differential Calculus: Limits, Continuity, Derivatives, Partial Derivatives, and Gradients",
          "Optimization Techniques: Cost Functions, Gradient Descent, and Stochastic Gradient Descent (SGD)",
          "Probability Theory: Conditional Probability, Bayes' Theorem, and Random Variables",
          "Probability Distributions: Gaussian (Normal), Binomial, and Poisson Distributions",
        ],
      },
      {
        title: "Module 2 — Engineering Foundations & Data Basics",
        topics: [
          "Applied Problem-Solving with Python",
          "Foundations of Computer Science & Tooling",
          "Python Programming Fundamentals & Advanced Python Engineering for AI",
          "Essential SQL for Data Science",
          "Probability Theory and Statistics Applications in ML Data",
        ],
      },
      {
        title: "Module 3 — Machine Learning & Neural Networks",
        topics: [
          "Foundations of Machine Learning & Regression Analysis",
          "Algorithmic Problem-Solving in ML (SVM, k-NN, Decision Trees, Ensemble Learning)",
          "Fundamentals of Deep Learning & Neural Network Mathematics (CNNs, RNNs)",
          "Applied Natural Language Processing (NLP) & Computer Vision Foundations",
          "Foundations of Generative AI & Large Language Model Architectures",
          "",
          ""
        ],
      },
      {
        title: "Module 4 — Data Science & Production Systems",
        topics: [
          "Data Science Environments and Tooling",
          "Data Wrangling, Preprocessing, and Exploratory Data Analysis (EDA)",
          "Advanced Statistical Modeling for Production Systems",
          "Big Data Technologies and Scalable AI Engineering",
          "Vector Databases & Retrieval-Augmented Generation (RAG) Implementations",
          "",
          ""
        ],
      },
    ],
  },
  
 "Software Engineering": {
  title: "Software Engineering",
  duration: "9 months",
  level: "Intermediate",
  technologies: ["Assembly", "C", "C++", "JavaScript", "Ghidra", "IDA Pro", "V8 Engine"],
  description: "Master the complete software engineering stack from low-level computer architecture, digital logic design, and assembly programming, up through advanced memory management in C/C++, JavaScript internals, and complex algorithms.",
  outcomes: [
    "Design and optimize digital logic circuits, synchronous sequential components, and custom arithmetic hardware interfaces[cite: 224, 233, 237].",
    "Develop performance-critical software using x86, x86_64, and ARM assembly languages with direct stack and system call manipulation[cite: 277, 344, 372, 382, 392].",
    "Architect foundational systems programs in C/C++ using dynamic memory distribution, function pointers, and custom data structures[cite: 415, 479, 480].",
    "Reverse engineer, debug, and perform binary code analysis on compiled executions using industrial frameworks like Ghidra and IDA[cite: 405, 406, 407, 408, 411].",
    "Execute engine-level JavaScript, managing lexical memory optimization, prototypes, and low-level execution pipelines[cite: 483, 484].",
    "Implement advanced algorithmic architectures including balanced trees, shortest path graphs, and complex dynamic programming structures[cite: 485, 486]."
  ],
  modules: [
    {
      title: "Module 1 — Digital Logic Design",
      topics: [
        "Number Systems, Data Codes, and Boolean Algebra Fundamentals[cite: 226, 227].",
        "Karnaugh Maps and Advanced Logical Function Simplification Workflows[cite: 228].",
        "Combinational Logic Design Principles and MSI Integrated Circuits[cite: 229, 230].",
        "Latches, Flip-Flops, Counters, and Synchronous Register Topologies[cite: 231, 232].",
        "Clock-Driven vs Event-Driven Sequential Circuits and Signal Instrumentation[cite: 233, 234, 235].",
        "Programmable Logic Devices (PLDs), Arithmetic Circuits, and Fault Diagnosis[cite: 236, 237, 238]."
      ]
    },
    {
      title: "Module 2 — Computer Architecture & Intro to Assembly",
      topics: [
        "Machine Code vs Assembly and Compilation Lifecycles via Assemblers/Linkers[cite: 248, 249].",
        "CPU Architectures Exploration: CISC vs RISC (x86, x86_64, ARM, RISC-V)[cite: 250, 251, 252, 253, 254, 255].",
        "Core Microarchitecture: ALU, Control Unit, Registers, Cache, and Memory Hierarchy[cite: 262, 263, 264, 265, 266, 268].",
        "Runtime Environments: RAM Structure, Stack Segments, Heap Layouts, and Memory Allocation[cite: 269, 270, 271, 272].",
        "The CPU Execution Cycle: Advanced Fetch, Decode, and Execute Paradigms[cite: 273, 274, 275, 276]."
      ]
    },
    {
      title: "Module 3 — x86 Assembly Programming & System Internals",
      topics: [
        "Low-Level Register Mapping: Main General Registers (EAX, EBX, ECX, EDX)[cite: 277, 278, 279, 280, 281, 282].",
        "Pointer Registers (ESP, EBP) and Index Vector Management (ESI, EDI)[cite: 283, 284, 285, 286].",
        "EFLAGS Conditional Register State Mapping (Zero, Carry, Overflow, Sign)[cite: 287, 288, 289, 290, 291].",
        "Development Toolchain Assembly Configuration inside NASM, MinGW, GCC, and VSCode[cite: 297, 301, 302, 303].",
        "Data Movement and Mathematical Syntax Instructions (MOV, PUSH, POP, LEA, ADD, SUB, MUL, DIV, INC, DEC)[cite: 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320].",
        "Bitwise Logic Pipelines (AND, OR, XOR, NOT) and Secure XOR Encryption Demostrations[cite: 321, 322, 323, 324, 325, 328]."
      ]
    },
    {
      title: "Module 4 — Control Flow, Stack Architecture & Linux Syscalls",
      topics: [
        "Conditional and Unconditional Jumps alongside Structural Comparisons (JMP, JE, JNE, JL, JG, CMP, TEST)[cite: 330, 331, 332, 333, 334, 335, 338, 339].",
        "Loop Automation Constructs and Complex Matrix Multiplication Frameworks[cite: 336, 337, 343].",
        "Stack Operations and Control Function Allocation Frameworks (CALL, RET)[cite: 344, 345, 351, 352].",
        "Calling Conventions Standardization: cdecl Architecture and System V ABI Implementations[cite: 353, 354, 355].",
        "Low-Level Memory Addressing Modes: Direct, Indirect, Indexed, and Buffer Boundary Systems[cite: 360, 361, 362, 363, 364].",
        "Linux Kernel System Calls Integration (write, read, exit) with Custom Console I/O Handlers[cite: 372, 373, 374, 375, 376, 377]."
      ]
    },
    {
      title: "Module 5 — Advanced Cross-Architecture Assembly & Reverse Engineering",
      topics: [
        "x86_64 64-bit Architecture Upgrades: Expanded Registers (RAX, RBX, RCX, RDX) and Calling Interface Shifts[cite: 382, 383, 384, 385, 386, 387, 388, 389].",
        "ARM Assembly Specifications: X0-X30 General Registers, Link Register (LR), and Program Counter (PC)[cite: 392, 393, 394, 396, 397].",
        "Load/Store Architectures, Power Efficiency Metrics, and RISC Optimization Strategies[cite: 399, 400, 401].",
        "Reverse Engineering Implementations: Binary Disassembly via Ghidra, IDA Pro, and objdump Frameworks[cite: 405, 406, 407, 408, 409].",
        "Static and Dynamic Binary Code Analysis, C-to-ASM Inspection, and Crackme Security Labs[cite: 410, 411, 413].",
        "Inline Assembly Integration with C/C++ (GCC/MSVC Formats) and SIMD Parallel Vector Optimizations[cite: 414, 415, 416, 417, 418]."
      ]
    },
    {
      title: "Module 6 — Core Systems Programming in C",
      topics: [
        "The Compilation Process, Token Structure, Native Variables, Base Constants, and Data Types[cite: 423, 424, 425, 426, 427].",
        "Operators, Conditional Branching, Complex Switch Evaluations, and Nested Loop Traversal[cite: 434, 447, 451, 453, 459].",
        "Functional Scope boundaries, Stack Recursion Algorithms, and Multidimensional Arrays[cite: 460, 465, 466, 469, 470].",
        "Character Array String Protocols and Native String Buffers Operations (strlen, strcpy, strcmp, strcat)[cite: 472, 473, 475, 476, 477, 478].",
        "Advanced Memory Pointer Architecture: Dereferencing, Address Arithmetic, Pointer-Array Relations, and Null/Void Qualifiers[cite: 479].",
        "Function Argument Architectures: Pass-by-Reference vs Pass-by-Value Mechanics[cite: 479]."
      ]
    },
    {
      title: "Module 7 — Advanced Memory Management & Data Structures in C",
      topics: [
        "Data Layout Optimization: Structs, Typedef, Nested Structures, and Union Data Allocation[cite: 479].",
        "Dynamic Heap Allocation Management Engines: malloc, calloc, realloc, and Manual free Mechanics[cite: 479, 480].",
        "Application Virtual Memory Structure: Stack and Heap Segmentation Protocols[cite: 479, 480].",
        "C Preprocessor Pipeline: Macros, Header Inclusions, Conditional Compilation, and Linker Integration[cite: 481].",
        "Advanced Language Storage Architecture: Function Pointers, Bit Fields, Volatile States, Static, and Extern Storage[cite: 481].",
        "Abstract Data Structure Engine Layouts: Linked Lists, Node Topologies, Stacks, Queues, Trees, and Hash Tables[cite: 479, 481]."
      ]
    },
    {
      title: "Module 8 — JavaScript Internals & V8 Engine Optimization",
      topics: [
        "JavaScript Execution from a Low-Level Perspective and Core JavaScript Internals[cite: 483].",
        "In-Memory Function Representation, Context Call Stacks, Variable Lookup Systems, and Lexical Scope[cite: 483].",
        "Advanced Closures Engineering, Variable Bindings Lifecycle, and Functional Programming Execution[cite: 483].",
        "Lexical Structures, High-Level Objects Architecture, and V8 Engine Low-Level Code Optimization Pathways[cite: 483].",
        "Object-Oriented Design Philosophy, Polymorphism Dynamics, Context Invocation Parameters, and 'this' keyword binding[cite: 483, 484].",
        "Prototypes Linkages, Internal [[Prototype]] Scope Chains, Constructor Mechanics, and Low-Level Object Inheritance Internals[cite: 484].",
        "Meta-Programming Implementations, Advanced Code Abstraction Layers, and Full SOLID Object-Oriented Integration[cite: 484].",
        "Creational, Structural, and Behavioral Enterprise Design Patterns[cite: 484]."
      ]
    },
    {
      title: "Module 9 — Advanced Algorithms & Complexity Analysis",
      topics: [
        "Asymptotic Analysis: Big O Notation, Execution Growth Rates, and Algorithm Efficiency Metrics[cite: 481, 482].",
        "Linear Data Searching Strategies and Recursive Backtracking Traversal Frameworks[cite: 481, 482].",
        "Sorting Algorithms Benchmarks: Insertion Sort, Counting Sort, Quick Sort, and Merge Sort Frameworks[cite: 485].",
        "Heaps, Priority Queues, Sliding Window Optimizations, and Quick Select Indexing Solutions[cite: 485].",
        "Binary Search Trees (BST): Balanced Nodes Navigation, In-Memory Deletions, and Linear DFS/BFS Graph Operations[cite: 485].",
        "Self-Balancing Tree Specifications: AVL Trees and Red-Black Trees (Insertion, Deletion, and Deletion Fixup Routines)[cite: 485].",
        "Graph Computations: Kahn's Algorithm for Topological Sorting and Shortest Path Optimization (Dijkstra and Bellman-Ford)[cite: 485].",
        "Minimum Spanning Trees (Prim's and Kruskal's Algorithms), Greedy Approaches, and Multi-Stage Dynamic Programming[cite: 485, 486]."
      ]
    }
  ]
},
"Robotics Engineering": {
  "title": "Robotics Engineering",
  "duration": "12-15 Weeks",
  "level": "Beginner to Intermediate",
  "technologies": ["ROS", "Gazebo", "Python", "C++", "SLAM", "Computer Vision"],
  "description": "Master the complete lifecycle of robotics engineering from foundational mathematics and physics to state-of-the-art ROS programming, core SLAM algorithms, advanced computer vision techniques, and modern robotic control systems.",
  "outcomes": [
    "Apply multi-variable calculus, differential equations, and statistical error analysis to solve complex robotics engineering problems",
    "Analyze foundational static and dynamic forces, calculate stress and strain parameters, and conduct full beam bending and structural integrity evaluations",
    "Design advanced robotic parts, complex gear assemblies, and robotic chassis layouts utilizing industrial CAD frameworks",
    "Evaluate robot kinematics, dynamics, and control systems using Denavit-Hartenberg formulations",
    "Execute professional SLAM algorithms, visual odometry, and computational geometry modeling via ROS and Gazebo ecosystems",
    "Integrate core mechatronic elements including STM32/Arduino microcontrollers, sensor arrays, feedback actuators, and customized PID control loops"
  ],
  "modules": [
    {
      "title": "Stage 0 - Foundations (2-4 месяца)",
      "description": "Фундаментальная теоретическая подготовка по математике и физике, необходимая для понимания пространственных преобразований, фильтрации сигналов и динамики роботов.",
      "topics": [
        "1. Mathematics for Robotics: Изучение математического аппарата, включающего Algebra (Linear equations, Matrices, Vectors, Systems of equations), Calculus (Derivatives, Integrals, Partial derivatives), Trigonometry (sin, cos, tan, Unit circle, Rotation), а также Probability & Statistics для работы со случайными величинами (Gaussian distribution, Bayes theorem, Noise filtering).",
        "Linear Algebra (очень важно): Глубокое освоение матричных операций для координатных преобразований, включая Matrix multiplication, Eigenvectors, Transformations и Rotation matrices.",
        "2. Physics for Robotics: Изучение физических принципов, управляющих движением систем: Newton laws, Force & torque, Velocity & acceleration, Momentum, Friction, а также основы электротехники и физики приводов (Electricity basics, Motors physics)."
      ]
    },
    {
      "title": "Stage 1 - Programming Fundamentals (2-3 месяца)",
      "description": "Освоение базовых языков программирования (C и Python) и ключевых библиотек для разработки алгоритмов управления и обработки данных.",
      "topics": [
        "3. C Programming: Изучение основ низкоуровневого программирования для микроконтроллеров: Variables, Loops, Functions, Arrays, Pointers, Structs и Memory management. Закрепление навыков на практике через разработку проектов: Calculator, Sensor simulator, UART communication.",
        "4. Python for Robotics: Освоение синтаксиса и объектно-ориентированного программирования (Python basics, OOP), применение специализированных библиотек для инженерных вычислений (NumPy, Matplotlib) и базовых инструментов компьютерного зрения (OpenCV basics). Практические проекты модуля: Camera processing, Object tracking, Robot simulator."
      ]
    },
    {
      "title": "Stage 2 - Electronics & Hardware (3-5 месяцев)",
      "description": "Изучение схемотехники, проектирования цифровой логики и принципов работы с современными микроконтроллерными платформами.",
      "topics": [
        "5. Electronics Fundamentals: Знакомство с базовой компонентной базой электроники: Voltage/current, Resistors, Capacitors, Transistors, MOSFET, основы построения систем питания (Power systems) и практическое применение базовой формулы: V = IR (Ohm's law).",
        "6. Digital Logic Design: Разбор принципов построения цифровых устройств: Binary system, Logic gates, Flip-flops, проектирование конечных автоматов (FSM), работа с регистрами (Registers) и синхронизацией сигналов (Timing). Проекты этапа: Traffic light FSM, Digital counter.",
        "7. Microcontroller Fundamentals: Работа со специализированными аппаратными платформами (STM32, Arduino, ESP32) и периферийными интерфейсами: GPIO, UART, SPI, I2C, ADC, PWM, Timers, Interrupts, DMA. Практическая реализация в проектах: Smart sensor node, Bluetooth robot, Motor controller."
      ]
    },
    {
      "title": "Stage 3 - Robotics Core (4-6 месяцев)",
      "description": "Изучение ядра робототехники — кинематики манипуляторов, теории автоматического управления, принципов сбора данных с сенсоров и управления исполнительными механизмами.",
      "topics": [
        "8. Robotics Fundamentals: Расчёт кинематических схем роботов, включая Degrees of freedom, Coordinate systems, Forward kinematics, Inverse kinematics, Robot dynamics, Motion planning и применение формулы distance.",
        "9. Control Systems: Разработка систем обратной связи (Feedback systems), исследование устойчивости (Stability) и передаточных функций (Transfer functions). Глубокое освоение PID control с реализацией алгоритма по формуле: u(t)=K_p e(t)+K_i\\int e(t)dt+K_d\\frac{de(t)}{dt}. Закрепление в проектах: Self-balancing robot, Line follower, Drone stabilization.",
        "10. Sensors & Actuators: Комплексная интеграция измерительных систем (Sensors: Ultrasonic, IMU, Gyroscope, Accelerometer, GPS, LIDAR, Encoders, Camera) и приводных устройств (Actuators: Servo motors, DC motors, Stepper motors, BLDC). Закрепление навыков в проектах: Obstacle avoidance robot, Autonomous rover."
      ]
    },
    {
      "title": "Stage 4 - Embedded Robotics Software (3-5 месяцев)",
      "description": "Проектирование встроенного программного обеспечения реального времени и создание распределённых робототехнических систем на базе операционной системы ROS2.",
      "topics": [
        "11. Embedded Systems: Разработка ПО на базе операционных систем реального времени (RTOS / FreeRTOS), управление планированием задач (Scheduling), оптимизация использования памяти (Memory optimization) в рамках Real-time systems.",
        "12. ROS2 (Robot Operating System): Построение архитектуры робота с использованием графов ROS2: Nodes, Topics, Publishers/subscribers, Services, настройка координатных преобразований (TF2) и развёртывание стека автономной навигации (Navigation stack). Практические проекты: Mapping robot, Autonomous navigation."
      ]
    },
    {
      "title": "Stage 5 - AI & Computer Vision (4-6 месяцев)",
      "description": "Применение алгоритмов компьютерного зрения и методов искусственного интеллекта для распознавания объектов и интеллектуального планирования путей.",
      "topics": [
        "13. Computer Vision: Использование библиотеки OpenCV для продвинутой обработки изображений (Image processing, Edge detection, Object detection) и изучение базовых алгоритмов одновременной локализации и картографирования (SLAM basics). Реализация проектов: Face tracking robot, Object following robot.",
        "14. AI for Robotics: Применение технологий искусственного интеллекта: Neural networks, CNN, Reinforcement learning и интеллектуальных алгоритмов планирования траекторий (Path planning AI). Работа с популярными фреймворками PyTorch и TensorFlow. Проекты этапа: AI autonomous car, Vision-based robot."
      ]
    },
    {
      "title": "Stage 6 - Advanced Robotics (6+ месяцев)",
      "description": "Углублённое изучение автономных систем навигации и аппаратного ускорения алгоритмов робототехники.",
      "topics": [
        "15. Autonomous Systems: Исследование продвинутых систем навигации роботов, включая полноценный SLAM, алгоритмы локализации (Localization), фильтрацию данных с помощью Kalman filter, Path planning и координацию многоагентных групп (Multi-agent systems).",
        "16. FPGA for Robotics: Раздел для специализации на ПЛИС (FPGA). Изучение языков описания аппаратуры Verilog/SystemVerilog, архитектуры микросхем (FPGA architecture), параллельной обработки данных (Parallel processing) и аппаратного ускорения алгоритмов (Hardware acceleration). Реализация проектов: FPGA motor controller, Vision accelerator."
      ]
    },
    {
      "title": "Stage 7 - Mechanical Robotics",
      "description": "Проектирование механической составляющей и несущих конструкций роботизированных комплексов.",
      "topics": [
        "17. Mechanical Design: Компьютерное проектирование и моделирование узлов робота (CAD) в средах Fusion 360 и SolidWorks. Проектирование звеньев манипуляторов (Robot arms), компоновка мобильных шасси (Chassis design) и расчёт механических передач (Gears)."
      ]
    }
  ]
},
   
 "Mechanical Engineering": {
  title: "Mechanical Engineering",
  duration: "12-15 Weeks",
  level: "Beginner to Intermediate",
  technologies: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB", "Fusion 360", "ANSYS Fluent", "OpenFOAM"],
  description: "Master the complete lifecycle of mechanical engineering from foundational mathematics and physics to state-of-the-art CAD modeling, core fluid/thermal dynamics, advanced FEA/CFD simulations, and modern mechatronics integration.",
  outcomes: [
    "Apply multi-variable calculus, differential equations, and statistical error analysis to solve complex mechanical engineering problems",
    "Analyze foundational static and dynamic forces, calculate stress and strain parameters, and conduct full beam bending and structural integrity evaluations",
    "Design advanced 3D parts, complex gear assemblies, and robotic chassis layouts utilizing industrial SolidWorks, AutoCAD, and Fusion 360 frameworks",
    "Evaluate fluid flow behavior, thermal heat transfer mechanics, turbulence anomalies, and aerodynamic forces using Bernoulli formulations",
    "Execute professional structural simulations, thermal maps, and computational fluid dynamics (CFD) modeling via ANSYS and Fluent ecosystems",
    "Integrate core mechatronic elements including STM32/Arduino microcontrollers, sensor arrays, feedback actuators, and customized PID control loops"
  ],
  modules: [
    {
      title: "Module 1 — Engineering Foundations",
      topics: [
        "Mathematics: Algebra, Equations, Functions, Complex Numbers, and Matrices [cite: 2, 3, 4, 5, 6, 7]",
        "Trigonometry & Vectors: Applied Angles, Sin/Cos/Tan Formulations, Vectors, and Rotations [cite: 8, 9, 10, 11, 12]",
        "Calculus & Linear Algebra: Derivatives, Integrals, Differential Equations, Eigenvalues, and Transformations [cite: 13, 14, 15, 16, 17, 18, 19, 20]",
        "Statistics & Data Analysis: Probability Distributions, Error Analysis, and Dataset Interpretations [cite: 21, 22, 23, 24]",
        "Physics Mechanics: Foundational Laws of Motion, Velocity, Acceleration, Forces, and Torque Vectors [cite: 25, 26, 27, 28, 29, 30, 31]",
        "Thermodynamics & Electricity: Heat Energy, Temperature Scales, Pressure, Voltage, Current, and Power Basics [cite: 32, 33, 34, 35, 36, 37, 38, 39]"
      ]
    },
    {
      title: "Module 2 — Engineering Fundamentals",
      topics: [
        "Technical Drawing Fundamentals: Orthographic Projection, Standardized Dimensioning, and Tolerances [cite: 42, 44, 45, 46, 47]",
        "CAD Software Implementation: Industry Workflows in SolidWorks, Fusion 360, and AutoCAD Systems [cite: 48, 49, 50, 51]",
        "Materials Science: Characteristics of Aluminum, Steel, Titanium, Polymers, Carbon Fiber, and Composites [cite: 56, 58, 59, 60, 61, 62, 63, 64]",
        "Material Degradation: Testing Structural Strength, Surface Hardness, Fatigue Cycles, and Corrosion Resistance [cite: 65, 66, 67, 68, 69]",
        "Practical CAD Prototyping: Modeling Mechanical Parts, Intricate Gear Systems, and Robotic Chassis Configurations [cite: 52, 53, 54, 55]"
      ]
    },
    {
      title: "Module 3 — Core Mechanical Engineering",
      topics: [
        "Statics & Structural Equilibrium: Balancing Force Systems and Moments ($F=ma$ and $\\tau = rF\\sin\\theta$) [cite: 71, 73, 74, 75, 76, 77, 78, 79, 80]",
        "Dynamics & Kinematics: Linear/Angular Velocity Vectors, Rotational Systems, and Complex Equations of Motion [cite: 84, 85, 86, 87, 88, 89]",
        "Strength of Materials: Stress, Strain, and Deformation Metrics ($\\sigma=\\frac{F}{A}$ and $\\epsilon=\\frac{\\Delta L}{L}$) [cite: 90, 92, 93, 94, 97, 98, 99, 100]",
        "Structural Loading: Calculating Complex Beam Bending Moment Diagrams and Mechanical Torsion [cite: 91, 95, 96]",
        "Thermodynamics Core: Heat Transfer Vectors, Mechanical Engines, Refrigeration Cycles, Entropy, and Ideal Gas Laws [cite: 101, 102, 103, 104, 105, 106, 107, 108]",
        "Fluid Mechanics: Fluid Flow Dynamics, Boundary Pressures, Turbulence Variations, and Bernoulli Equations [cite: 109, 110, 111, 112, 113, 114]",
        "Core Engineering Practicum: Beam Stress Analysis, Bridge Structures, Pipe Networks, and Drone Aerodynamics [cite: 81, 82, 83, 116, 117, 118]"
      ]
    },
    {
      title: "Module 4 — Mechanical Systems",
      topics: [
        "Machine Design Principles: Specification of Bearings, Industrial Gears, Shafts, Mechanical Springs, and Couplings [cite: 121, 122, 123, 124, 125, 126, 127]",
        "Manufacturing Engineering: Setting Up CNC Machining Operations, Advanced Milling, Lathe Setup, and Welding [cite: 131, 132, 133, 134, 135, 136]",
        "Material Processing: Foundational Metal Casting and Additive Manufacturing via High-Resolution 3D Printing [cite: 137]",
        "Mechanical Vibrations: Evaluating System Oscillations, Destructive Resonance, Damping Coefficients, and Hooke's Law [cite: 138, 139, 140, 141, 142, 143]",
        "Systems Architecture Projects: Assembly of Multistage Gearboxes and Articulated Robotic Arm Mechanisms [cite: 128, 129, 130]"
      ]
    },
    {
      title: "Module 5 — Advanced Mechanical Engineering",
      topics: [
        "Finite Element Analysis (FEA): Mathematical Mesh Simulation via ANSYS and COMSOL Multiphysics Environments [cite: 146, 147, 148, 149]",
        "FEA Problem Solving: Executing Structural Simulation, Thermal Deflection Analysis, and Localized Stress Profiling [cite: 150, 151, 152, 153]",
        "Computational Fluid Dynamics (CFD): Modeling Aerodynamics and Complex Airflow Simulation Fields [cite: 154, 155, 156, 157]",
        "CFD Solver Environments: Configuring Heat Flow Simulations Inside ANSYS Fluent and OpenFOAM Frameworks [cite: 158, 159, 160, 161]",
        "Robotics Mechanics: Multi-Axis Robot Kinematics, Integrated Motion Systems, Embedded Actuators, and Linkage Mechanisms [cite: 162, 163, 164, 165, 166, 167]",
        "Advanced Capstone Design: Simulating Industrial Robotic Arms and Complete Mobile Robot Chassis Models [cite: 168, 169, 170]"
      ]
    },
    {
      title: "Module 6 — Mechatronics & Embedded Systems",
      topics: [
        "Mechatronics Engineering: Unifying Mechanical Structures with Embedded Control Systems [cite: 171, 173]",
        "Hardware Interfaces: Configuring Electronic Analog/Digital Sensors and High-Torque Industrial Electric Motors [cite: 174, 175, 176]",
        "Microcontroller Deployments: Developing Control Firmware on STM32 ARM Architecture and Arduino Platforms [cite: 177, 178, 179]",
        "Control Theory: Implementing Proportional-Integral-Derivative (PID) Loops for Precision Kinematic Control [cite: 180]",
        "Automation Projects: Constructing Prototype Smart Robotic Systems and Automated Production Machinery [cite: 181, 182, 183]"
      ]
    }
  ]
},
 "Microcontroller Fundamentals": {
  id: 10, 
  title: "Microcontroller Fundamentals",
  duration: "6-8 months",
  level: "Intermediate",
  technologies: ["STM32", "ARM Cortex-M", "FreeRTOS", "STM32CubeIDE", "UART", "SPI", "I2C", "CAN"],
  description: "Master the essentials of embedded systems development. Learn microcontroller architecture, digital logic, bare-metal C programming, peripheral interfacing, and advanced topics like RTOS, DMA, and industrial protocols using STM32 hardware.",
  outcomes: [
    "Understand the core architecture of microcontrollers (CPU, Flash, SRAM, GPIO, Timers)",
    "Write efficient Embedded C code handling memory-mapped I/O and volatile registers",
    "Configure and program industrial communication protocols including UART, SPI, and I2C",
    "Interface analog and digital components such as sensors, LCD/OLED displays, and motor controllers",
    "Implement real-time systems using interrupts, hardware timers, and FreeRTOS fundamentals",
    "Debug complex embedded hardware using logic analyzers, oscilloscopes, and advanced STM32 tools"
  ],
  modules: [
    {
      title: "Module 1 — Introduction to Microcontrollers",
      topics: [
        "Microcontroller Definition: CPU vs MCU vs MPU differences",
        "Overview of Embedded and Real-Time Systems",
        "Core Hardware Architecture and MCU Applications (AVR, PIC, ESP32, ARM Cortex-M, STM32)",
        "Internal Subsystems: CPU Core, Flash Memory, SRAM, EEPROM, GPIO, Timers, Interrupt Controller, ADC/DAC, and Communication Interfaces"
      ]
    },
    {
      title: "Module 2 — Binary & Digital Fundamentals",
      topics: [
        "Number Systems: Binary, Decimal, Hexadecimal, and Octal",
        "Bitwise Operations and Boolean Logic (AND, OR, XOR, NOT, NAND, NOR)",
        "Digital Electronics Basics: Logic Gates, Flip-Flops, Registers, Counters, and Clock Signals",
        "Finite State Machine (FSM) Basics"
      ]
    },
    {
      title: "Module 3 — C Programming for Microcontrollers",
      topics: [
        "Standard C Core: Variables, Data Types, Loops, Functions, Arrays, and Structures",
        "Embedded C Specializations: Volatile keyword, register manipulation, bitwise modifications, and memory-mapped I/O",
        "Working with Header Files and Peripheral Drivers Foundations"
      ]
    },
    {
      title: "Module 4 — Development Environment & Toolchains",
      topics: [
        "Hardware and Software Environment Setup for STM32: STM32CubeIDE and STM32CubeMX",
        "Alternative Toolchains: PlatformIO and Keil MDK",
        "Flashing Hardware Firmware using ST-Link Programmer",
        "In-Circuit Debugging Techniques: Breakpoints and Serial Monitor evaluation"
      ]
    },
    {
      title: "Module 5 — GPIO Programming & Practical Application",
      topics: [
        "General Purpose Input Output (GPIO) Principles: Digital Input and Digital Output configurations",
        "Hardware Pull-up and Pull-down Resistor Management",
        "Hands-on Projects: Blink LED, Button Control, Traffic Light Simulator, and LED Patterns development"
      ]
    },
    {
      title: "Module 6 — Timers & Pulse Width Modulation (PWM)",
      topics: [
        "Hardware Timers: Delay generation, hardware clock configurations, counter modes, and timer interrupts",
        "Pulse Width Modulation (PWM): Generation principles, duty cycle control, and frequency adjustments",
        "Actuator Interfaces: Servo motor steering and DC motor speed regulation"
      ]
    },
    {
      title: "Module 7 — Interrupt Systems",
      topics: [
        "Architecture of Interrupts: Definitions, Context Switching, and Interrupt Service Routines (ISR)",
        "Processing Subsystems: External Interrupts, Timer Interruption Systems, and Nested Vectored Interrupt Controller (NVIC) configuration",
        "Practical Exercises: Button-driven interrupts, Timer-controlled LED responses, and Hardware Event Counters"
      ]
    },
    {
      title: "Module 8 — UART Communication Protocol",
      topics: [
        "Serial Communication Fundamentals: Transmit/Receive (TX/RX lines) and Baud Rate matching",
        "Structural Analysis of UART Frames and Serial Debugging workflows",
        "Practical Projects: UART Terminal integration, STM32-to-PC data transfer, and HC-05 Bluetooth transceiver interfacing"
      ]
    },
    {
      title: "Module 9 — Synchronous Serial Interfaces: SPI & I2C",
      topics: [
        "Serial Peripheral Interface (SPI): Master/Slave roles, MOSI/MISO signal lines, Clock polarity variations, and Chip Select (CS) logic",
        "Inter-Integrated Circuit (I2C): SDA/SCL lines, Device Addressing schemes, and Start/Stop flow conditions",
        "Multiple Device Integration: Interfacing OLED Displays, External Sensors, EEPROM Memory chips, and Real-Time Clock (RTC) modules"
      ]
    },
    {
      title: "Module 10 — ADC & Sensor Interfacing",
      topics: [
        "Analog-to-Digital Converter (ADC): Analog vs Digital data processing, Resolution limits, Sampling rate parameters, and Voltage conversion formulas",
        "Sensor Interfaces: Potentiometer data acquisition, Temperature sensor reads, Light intensity capture, and Battery level monitoring systems"
      ]
    },
    {
      title: "Module 11 — External Communication Modules",
      topics: [
        "Wireless and Position Tracking Hardware: HC-05 Bluetooth, ESP8266 Wi-Fi chipsets, NRF24L01 RF modules, GPS modules, and GSM modems",
        "Practical Integration Labs: Bluetooth LED configuration, Distributed wireless sensor networks, and autonomous GPS Tracker systems"
      ]
    },
    {
      title: "Module 12 — Displays Integration",
      topics: [
        "Hardware Interface Standards for Visual Outputs: 16x2 Character LCDs, SPI/I2C OLED screens, and Thin-Film Transistor (TFT) screen basics",
        "Visual Graphics Coding Projects: Dynamic Sensor Value displays, Multi-level Menu navigation systems, and interactive Mini Dashboards"
      ]
    },
    {
      title: "Module 13 — Storage Systems & Power Infrastructure",
      topics: [
        "Removable Storage: SD Card interface layouts and File Allocation Table (FAT) filesystem drivers",
        "Data Logging Automations for remote sensor deployments",
        "Power Electronics Basics: Linear Drop-Out (LDO) regulators, switching Buck Converters, Battery operation systems, and electrical Protection Circuits"
      ]
    },
    {
      title: "Module 14 — FreeRTOS & Bare-Metal Execution Control",
      topics: [
        "Real-Time Operating System (RTOS) Frameworks: FreeRTOS architecture basics",
        "Task Execution Control: Deterministic Schedulers, multi-threaded Task loops, Queues communication channels, and Mutex resource lockers"
      ]
    },
    {
      title: "Module 15 — Advanced Debugging & STM32 Peripherals",
      topics: [
        "Bench Engineering: Waveform debugging with Logic Analyzers and digital Oscilloscope baselines",
        "Advanced Software Diagnoses: UART real-time tracing and low-level Hard Fault debugging handlers",
        "Advanced STM32 SoC blocks: Direct Memory Access (DMA), Low Power Modes, internal Real-Time Clock (RTC), Watchdog timers, USB controller foundations, and Controller Area Network (CAN) industrial bus protocols"
      ]
    }
  ]
},
  "Electrical Engineering": {
    title: "Electrical Engineering",
    duration: "18 months",
    level: "Intermediate",
    technologies: ["SPICE", "MATLAB", "Altium Designer", "Oscilloscopes"],
    description: "Explore advanced circuit analysis, analog and digital electronics, signal processing, and power systems engineering.",
    outcomes: [
      "Analyze and solve complex AC/DC circuits",
      "Design active and passive analog filters",
      "Understand the operation of semiconductor devices",
      "Analyze power distribution and energy systems",
      "Use SPICE software to simulate electrical behaviors",
      "Process and analyze electrical signals",
    ],
    modules: [
      {
        title: "Core Modules",
     topics: [
        "1. Electrical Fundamentals",
        "2. Circuit Analysis",
        "3. Analog Electronics",
        "4. Digital Electronics",
        "5. Power Electronics",
        "6. Electromagnetics",
        "7. Signals & Systems",
        "8. Electrical Machines",
        "9. Control Systems",
        "10. Embedded Systems",
        "11. PCB Design",
        "12. Industrial Automation",
        "13. Renewable Energy Systems",
        "14. High Voltage Engineering"
      ]
      },
    ],
  },
  "Compiler Engineering": {
  title: "Compiler Engineering",
  duration: "12-14 months",
  level: "Advanced",
  technologies: ["C", "LLVM", "Clang", "GCC", "Flex", "Bison", "ANTLR", "WebAssembly"],
  description: "Become a world-class compiler engineer. Go from computer architecture and formal grammar basics to advanced LLVM IR transformations, JIT compilation, and state-of-the-art optimizations.",
  outcomes: [
    "Build working parsers and lexers from scratch using manual techniques and generator tools",
    "Master intermediate representations (IR), SSA form, and syntax tree transformations",
    "Write custom compiler passes and optimizations for modern architectures like x86 and ARM",
    "Deeply understand LLVM core infrastructure and modern compiler backends",
    "Design and implement virtual machines, bytecode interpreters, and JIT compilers",
    "Apply formal verification, advanced language theory, and security mitigations to systems code"
  ],
  modules: [
    {
      title: "Module 1 — Computer Science Foundations",
      topics: [
        "1. Computer Architecture (CPU, Registers, Stack, Heap, Memory Layout, Cache, Pipelines, Instruction Execution)",
        "2. Operating Systems Basics (Processes, Threads, Virtual Memory, System Calls, ELF Format, Linking, Loading, Linux & POSIX Basics)"
      ]
    },
    {
      title: "Module 2 — Programming Fundamentals",
      topics: [
        "3. C Programming Core (Pointers, Memory Management, Structs, Function Pointers, Bit Operations, Dynamic Memory, File I/O)",
        "4. Advanced Programming & Data Structures (Algorithms, Graph Theory, Trees, Hash Tables, Complexity Analysis)"
      ]
    },
    {
      title: "Module 3 — Mathematics for Compilers",
      topics: [
        "5. Discrete Mathematics (Sets, Relations, Functions, Graphs, Logic, Proofs)",
        "6. Formal Languages & Automata (Finite Automata, DFA/NFA, Regular Expressions, Context-Free Grammar, Pushdown Automata, Turing Machines)"
      ]
    },
    {
      title: "Module 4 — Parsing & Lexical Analysis",
      topics: [
        "7. Lexical Analysis (Tokens, Lexers, Regular Expressions, Finite State Machines, Tools: Flex, RE2C)",
        "8. Syntax Analysis & Parsing (LL/LR Parsing, Recursive Descent, Shift-Reduce Parsing, Parse Trees, AST, Tools: Bison, ANTLR)"
      ]
    },
    {
      title: "Module 5 — Compiler Internals",
      topics: [
        "9. Abstract Syntax Tree & Semantics (AST Design, Tree Traversal, Symbol Tables, Semantic Analysis, Scope Resolution)",
        "10. Intermediate Representation (IR) (Three-Address Code, SSA Form, Control Flow Graph, Data Flow Analysis, LLVM IR Introduction)"
      ]
    },
    {
      title: "Module 6 — Code Generation",
      topics: [
        "11. Assembly & Machine Code (x86 & ARM Assembly, Calling Conventions, Registers, Stack Frames)",
        "12. Backend Development (Instruction Selection, Register Allocation, Peephole Optimization, Machine Code Emission)"
      ]
    },
    {
      title: "Module 7 — Optimization",
      topics: [
        "13. Compiler Optimization (Dead Code Elimination, Constant Folding, Loop Optimization, Inline Expansion, Vectorization, Data Flow Optimization)",
        "14. Advanced Optimization (SSA Optimization, Alias Analysis, JIT Optimization, Profile-Guided Optimization)"
      ]
    },
    {
      title: "Module 8 — Runtime Systems",
      topics: [
        "15. Runtime Engineering (Garbage Collection, Memory Allocators, Virtual Machines, Bytecode Interpreters, JVM & WebAssembly Basics)"
      ]
    },
    {
      title: "Module 9 — LLVM & Modern Compilers",
      topics: [
        "16. LLVM Ecosystem (LLVM Architecture, Clang, Passes, IR Transformations, Backend Targets, LLVM Project Tools)",
        "17. GCC Internals (GCC Passes, RTL - Register Transfer Language, GCC Backend)"
      ]
    },
    {
      title: "Module 10 — Programming Languages",
      topics: [
        "18. Language Design (Syntax Design, Type Systems, Functional Programming, Object-Oriented Models, Static vs Dynamic Typing)",
        "19. Type Systems (Hindley-Milner, Type Inference, Generics, Polymorphism)"
      ]
    },
    {
      title: "Module 11 — JIT & Virtual Machines",
      topics: [
        "20. JIT Compilers (Dynamic Compilation, Hotspot Optimization, Tracing JIT, Runtime Profiling)",
        "21. Virtual Machines Deep Dive (JVM, V8 Basics, Lua VM, Bytecode Execution)"
      ]
    },
    {
      title: "Module 12 — Advanced Topics",
      topics: [
        "22. Parallel Compilers (GPU Compilation, SIMD Optimization, Parallel IR)",
        "23. Security in Compilers (Stack Protection, ASLR, Sanitizers, Undefined Behavior Management)"
      ]
    },
    {
      title: "Module 13 — Research Level Topics",
      topics: [
        "24. Advanced Language Theory (Dependent Types, Proof Assistants, Formal Verification, Functional Compilers)"
      ]
    }
  ]
},
  "Digital Logic Design": {
    title: "Digital Logic Design",
    duration: "12 Weeks",
    level: "Beginner",
    technologies: ["Verilog", "Logisim", "Boolean Algebra"],
    description: "Learn the foundations of digital hardware, from boolean algebra and logic gates to building complex sequential circuits and finite state machines.",
    outcomes: [
      "Simplify complex Boolean equations using K-Maps",
      "Design combinational logic circuits",
      "Build sequential logic components (flip-flops, registers)",
      "Design Finite State Machines (FSMs)",
      "Understand memory organization at the logic level",
      "Simulate digital circuits using EDA tools",
    ],
    modules: [
      {
        title: "Core Modules",
        topics: [
          "Number Systems and Codes",
          "Boolean Algebra",
          "Karnaugh Maps and Function Simplification",
          "Combinational Logic Design Principles",
          "Combinational Logic Design with MSI Circuits",
          "Latches and Flip-Flops",
          "Counters and Registers",
          "Clock-Driven Sequential Circuits",
          "Event-Driven Circuits",
          "Instrumentation and Interfacing",
          "Programmable Logic Devices",
          "Arithmetic Circuits",
          "Fault Diagnosis and Testing",
          ""
        ],
      },
    ],
  },
  
  "FPGA Engineering": {
    title: "FPGA Engineering",
    duration: "2 months",
    level: "Advanced",
    technologies: ["Verilog", "VHDL", "Xilinx Vivado", "Intel Quartus"],
    description: "Design, simulate, and implement high-performance custom digital hardware using Field-Programmable Gate Arrays (FPGAs).",
    outcomes: [
      "Write synthesizable RTL code in Verilog/VHDL",
      "Understand internal FPGA architecture (LUTs, CLBs)",
      "Simulate digital hardware using testbenches",
      "Optimize hardware designs for area and timing",
      "Implement DSP algorithms on FPGAs",
      "Integrate IP cores and Soft Processors",
    ],
    modules: [
      {
        title: "Core Modules",
        topics: [
          "Fundamentals of Digital Logic Design",
          "Boolean Algebra and Logic Gates",
          "Combinational Logic Circuits",
          "Sequential Logic and Memory Elements",
          "Finite State Machine (FSM) Design",
          "Hardware Description with Verilog HDL",
          "Hardware Description with VHDL",
          "FPGA Architecture and Internal Resources",
          "Static Timing Analysis (STA)",
          "Implementing DSP Algorithms on FPGA",
          "High-Speed Interfaces and Protocols",
          "FPGA System-on-Chip (SoC) Design",
        ],
      },
    ],
  },
  
 "Hardware Engineering": {
  title: "Hardware Engineering",
  duration: "10-12 month",
  level: "Advanced",
  technologies: ["Altium Designer", "Vivado", "Quartus Prime", "STM32", "Verilog", "SystemVerilog", "VHDL", "Embedded Linux", "Yocto", "Oscilloscope"],
  description: "Master the complete hardware design cycle. From core engineering mathematics and physics to advanced multi-layer PCB routing, FPGA programming with HDL, high-speed digital circuit design, and embedded system integration.",
  outcomes: [
    "Apply Kirchhoff and Nodal analysis to simulate and debug analog and digital electronic circuit",
    "Design and route multi-layer high-speed PCB handling signal and power integrity, EMI/EMC, and differential pair",
    "Develop digital logic hardware utilizing FPGA architecture with Verilog, SystemVerilog, and VHDL",
    "Program bare-metal firmware and design custom peripheral controller (UART, SPI, I2C) from scratch",
    "Configure and deploy Embedded Linux system using custom Device Tree, Buildroot, and Yocto layer",
    "Validate and test high-speed digital board using bench equipment like oscilloscope and spectrum analyzer"
  ],
  modules: [
    {
      title: "Module 1 — Engineering Mathematics & Physics Foundations",
      topics: [
        "Algebra, Linear Algebra, Trigonometry, Calculus, and Differential Equation base",
        "Binary Mathematics and Boolean Algebra foundation",
        "Probability Basics for engineering application",
        "Electricity and Magnetism: Current, Voltage, Ohm's Law, and Kirchhoff Law",
        "Electromagnetic Field theory and Power System architecture",
        "Signal Basics and waveform characteristic"
      ]
    },
    {
      title: "Module 2 — Electronics Fundamentals",
      topics: [
        "Analog Component: Resistor, Capacitor, Inductor, Diode, and Transistor operation",
        "Transistor Topology: MOSFET and BJT bias configuration",
        "Operational Amplifier (Op-Amp) circuit, Analog Amplifier design, and Active/Passive Filter",
        "Data Converter: ADC and DAC conversion architecture",
        "Digital Electronics: Binary System, Logic Gate, Flip-Flop, Register, Counter, and Multiplexer",
        "Finite State Machine (FSM) Design and Clock System timing analysis"
      ]
    },
    {
      title: "Module 3 — Circuit Design & PCB Engineering",
      topics: [
        "Circuit Analysis: Series/Parallel configuration, Nodal, and Mesh analysis",
        "Transient Response simulation for RC, RL, and RLC circuit",
        "Frequency Response evaluation and bode plot layout",
        "Schematic Design Capture and Component Library management",
        "PCB Routing strategy, Stackup design, and Ground Plane configuration",
        "High-Speed PCB Design: Differential Pair, Signal Integrity, Power Integrity, and EMI/EMC mitigation"
      ]
    },
    {
      title: "Module 4 — Embedded Systems Architecture",
      topics: [
        "Microcontroller hardware platform: ARM Cortex-M and STM32 architecture",
        "Hardware Peripheral: GPIO, UART, SPI, I2C, Timer, Interrupt, DMA, ADC, and PWM block",
        "Language Foundation: C, Embedded C, and Basics of C++ for hardware control",
        "Low-Level Implementation: Memory Management, Pointer allocation, and Register-level manipulation",
        "Bare Metal Programming and Real-Time Operating System (RTOS) Basics"
      ]
    },
    {
      title: "Module 5 — Computer Architecture & Organization",
      topics: [
        "CPU Architecture: Arithmetic Logic Unit (ALU), Internal Register, and Memory Hierarchy",
        "Cache Organization, Instruction Pipeline block, and Interrupt System routing",
        "Bus Architecture and interconnect interface mapping",
        "Assembly Language Architecture: ARM Assembly and x86 Basics",
        "Low-level execution model: Register map, Stack pointer, Memory Addressing mode, and Interrupt handler"
      ]
    },
    {
      title: "Module 6 — FPGA & Digital Systems Engineering",
      topics: [
        "FPGA Architecture: Look-Up Table (LUT), Internal Flip-Flop, DSP Block, and Block RAM (BRAM)",
        "Hardware Timing: Timing Constraint, Clock Domain Crossing, and Static Timing Analysis",
        "Hardware Description Language (HDL): Verilog, SystemVerilog, and VHDL",
        "Development Tool suite: AMD Xilinx Vivado and Intel Quartus Prime ecosystem",
        "Digital System Subsystem: FSM Design, Pipelining optimization, and custom Memory Controller",
        "Custom Interface Design: Hardware Acceleration, UART Controller, SPI Controller, and Video Interface layout"
      ]
    },
    {
      title: "Module 7 — Communication Systems & Protocols",
      topics: [
        "Low-speed serial wire connection: UART, SPI, and I2C implementation",
        "Industrial and Computer peripheral bus: CAN, USB, and Ethernet physical layout",
        "Wireless Communication stack: Bluetooth Low Energy (BLE) and Wi-Fi hardware integration"
      ]
    },
    {
      title: "Module 8 — Operating Systems & Embedded Linux",
      topics: [
        "Embedded Linux Foundation: Linux Basics, Shell scripting, and Kernel Architecture",
        "Hardware-to-OS Abstraction: Driver configuration and custom Device Tree modification",
        "Custom Linux Distribution Construction: Buildroot environment and Yocto Project configuration build"
      ]
    },
    {
      title: "Module 9 — High-Speed Hardware Design & Verification",
      topics: [
        "High-Speed Interface memory layout: DDR Memory routing matrix",
        "Multi-gigabit interconnect design: PCIe, HDMI, and LVDS link configuration",
        "Hardware Verification: Advanced Signal Integrity, Power Integrity simulation, and multi-channel Timing Analysis"
      ]
    }
  ]
},

  "Mobile Development": {
    title: "Mobile Development",
    duration: "6-8 months",
    level: "Intermediate",
    technologies: ["Flutter", "Dart", "Firebase", "BLoC/Riverpod"],
    description: "Become an expert in cross-platform development. Deep dive into Flutter and Dart to build high-performance iOS and Android applications with a single codebase.",
    outcomes: [
      "Professional proficiency in the Dart programming language",
      "Building complex UIs using Flutter Widgets",
      "Implementing architectural patterns (BLoC, Riverpod, Clean Architecture)",
      "Integrating with backends and cloud services (Firebase, REST APIs)",
      "Working with local databases and caching mechanisms",
      "Publishing applications to Google Play and the App Store",
    ],
    modules: [
      {
        title: "Module 1 — Programming Foundations + Dart",
        topics: [
          "Introduction to Mobile Development",
          "Dart Basics",
          "Functions & OOP",
        ],
      },
      {
        title: "Module 2 — Flutter UI Foundations",
        topics: [
          "Flutter Widgets",
          "Layout Systems",
          "Navigation & Forms",
          "State Management Basics",
        ],
      },
      {
        title: "Module 3 — Real Application Development",
        topics: [
          "Clean Code & Architecture",
          "BLoC",
          "Persistence",
        ],
      },
      {
        title: "Module 4 — APIs & Backend",
        topics: [
          "Async Programming",
          "REST APIs",
          "Firebase",
          "Real-Time Apps",
        ],
      },
       {
        title: "Module 5 — Advanced Flutter",
        topics: [
          "Advanced UI",
          "Architecture",
          "Performance",
        
        ],

      },
      {
        title: "Module 6 — Professional Workflow + Capstone",
        topics: [
          "Git & Collaboration",
          "Testing & Debugging",
          "Final Capstone",
        ],
      }
    ],
  },



  "Probability & Statistics": {
  "title": "Probability & Statistics",
  "duration": "4 Weeks",
  "level": "Advanced",
  "technologies": [
    "Bayesian Inference",
    "Distributions",
    "A/B Testing",
    "MLE"
  ],
  "description": "A comprehensive engineering course covering the foundations of random variables, probability distributions, Bayesian networking, and data-driven statistical hypothesis evaluation.",
  "outcomes": [
    "Understand Discrete and Continuous random variables deep under the hood",
    "Apply probability distributions to model network traffic and server loads",
    "Utilize Maximum Likelihood Estimation (MLE) for statistical predictions",
    "Design and accurately process engineering and UI A/B testing frameworks"
  ],
  "modules": [
    {
      "title": "Module 1 — Principles and Classical Probability",
      "topics": [
        "Combinatorics (Permutations and Combinations)",
        "Random Experiments and Outcomes",
        "Sample Spaces",
        "Classical Definition of Probability",
        "Types of Events (Certain, Impossible, Mutually Exclusive)"
      ]
    },
    {
      "title": "Module 2 — Theorems and Bayesian Theory",
      "topics": [
        "Probability Properties (Complementary Events, Addition Theorem)",
        "Multiplication Theorem",
        "Geometric Probability",
        "Conditional Probability, Independent and Dependent Events",
        "Law of Total Probability",
        "Bayes' Theorem",
        "Bernoulli Trial Schemes and Most Probable Numbers"
      ]
    },
    {
      "title": "Module 3 — Random Variables",
      "topics": [
        "Discrete and Continuous Random Variables",
        "Probability Distribution Laws",
        "Mathematical Expectation",
        "Variance",
        "Standard Deviation"
      ]
    },
    {
      "title": "Module 4 — Distributions and Functions",
      "topics": [
        "Discrete Distributions (Uniform, Binomial, Poisson, Geometric, Pascal, Hypergeometric)",
        "Continuous Distributions (Continuous Uniform, Normal/Gaussian, Exponential)",
        "Functions: PMF (Probability Mass Function)",
        "Functions: PDF (Probability Density Function)",
        "Functions: CDF (Cumulative Distribution Function)"
      ]
    }
  ]
},

 "Advanced Mathematics": {
    title: "Mathematics for Engineering",
    duration: "6 Weeks",
    level: "Advanced",
    technologies: ["Linear Algebra", "Calculus", "SVD", "Discrete Math"],
    description: "Rigorous academic mathematics optimized for computing engineering. Master linear systems, multi-variable calculus gradients, and structural discrete topologies.",
    outcomes: [
      "Solve advanced multi-dimensional matrix operations and linear systems",
      "Master gradient fields and partial derivatives used in machine learning",
      "Utilize Fourier Transforms for hardware and signal compression data formats",
      "Apply discrete structures and graph logic to optimize network packet flows",
    ],
    modules: [
      {
        title: "Module 1 — Matrix Algebra & Linear Systems",
        topics: [
          "Matrices, Determinants, Multiplications, and Inverse Matrix Properties",
          "Systems of Linear Algebraic Equations (SLAU): Cramer's and Gauss Methods",
          "Vector Spaces, Linear Independence, Vector Projections, and Bases",
          "Eigenvalues, Eigenvectors, and Singular Value Decomposition (SVD)",
        ],
      },
      {
        title: "Module 2 — Multi-Variable Calculus & Optimizations",
        topics: [
          "Limits of Sequences and Functions, Continuity Bounds, and Asymptotes",
          "Differential Calculus, Derivatives, Partial Derivatives, and Jacobi Matrices",
          "Gradient Vectors and Multi-Variable Cost Function Minimization Methods",
          "Integral Calculus: Definite, Indefinite, and Multiple Variable Integrals",
        ],
      },
      {
        title: "Module 3 — Differential Equations & Signal Transforms",
        topics: [
          "First-Order Ordinary Differential Equations (ODE) and Separable Flows",
          "Higher-Order Linear Differential Equations with Constant Coefficients",
          "Numerical Convergence Tests, Taylor Series, and Maclaurin Expansions",
          "Fourier Series, Fourier Integral Transforms, and Fast Fourier Transforms (FFT)",
        ],
      },
      {
        title: "Module 4 — Discrete Structures & Graph Theory",
        topics: [
          "Mathematical Set Theory, Predicate Calculus, and Boolean Operators",
          "Graph Topologies: Nodes, Directed Edges, Trees, and Network Fabrics",
          "Shortest Path Optimizations (Dijkstra, A* Search) and Graph Traversal Theory",
          "Combinatorics: Permutations, Subsets, and Advanced Counting Logics",
        ],
      },
    ],
  },

  "Applied Physics": {
    title: "Physics for Engineering",
    duration: "6 Weeks",
    level: "Advanced",
    technologies: ["Electromagnetism", "Maxwell Equations", "Semiconductors", "EMC"],
    description: "Deep engineering physics focused on electromagnetic field theory, wave dynamics, structural electronics behavior, and Electromagnetic Compatibility (EMC) guidelines.",
    outcomes: [
      "Analyze structural electrostatic and electrodynamic power distribution systems",
      "Understand Maxwell's equations behind RF and high-speed electrical signals",
      "Evaluate p-n junction physics driving modern transistor and IC logic",
      "Mitigate Signal Integrity (SI) crosstalk and electromagnetic board noise",
    ],
    modules: [
      {
        title: "Module 1 — Applied Mechanics & Thermodynamics",
        topics: [
          "Kinematics, Force Vectors, Acceleration Vectors, and Newton's Laws",
          "Energy Conservation, Linear Momentum, Torques, and Rotational Dynamics",
          "Ideal Gas Equations, Kinetic Theory, and Molecular Behaviors",
          "First and Second Laws of Thermodynamics, Entropy, and Thermodynamic Cycles",
        ],
      },
      {
        title: "Module 2 — Electrostatics & DC/AC Electrodynamics",
        topics: [
          "Coulomb's Law, Electric Fields, Gauss's Theorem, and Potentials",
          "Capacitance Principles, Dielectric Materials, and Electrical Fields Storage",
          "Direct Currents (DC), Ohm's Law, Kirchhoff's Mesh and Node Formulations",
          "Magnetic Flux, Ampere's Circuital Law, and Faraday's Induction Physics",
        ],
      },
      {
        title: "Module 3 — Maxwell's Field Equations & Wave propagation",
        topics: [
          "Displacement Current Concepts and Complete Maxwell's Equation Systems",
          "Electromagnetic Wave Equations and Propagation in Different Dielectrics",
          "Wave Impedance Calculations, Reflection Coefficients, and Absorptions",
          "Signals Analysis: Frequency Domains, Harmonics, and Spectral Densities",
        ],
      },
      {
        title: "Module 4 — Semiconductor Physics & EMC Design Principles",
        topics: [
          "Solid-State Band Theories: Conductors, Insulators, and Energy Gaps",
          "Doped Semiconductor Materials, p-n Junction Mechanics, and Depletion Zones",
          "Field-Effect Transistors (MOSFET) and Bipolar Junction Transistors (BJT)",
          "Electromagnetic Compatibility (EMC): Parasitic Modulations and Crosstalk Shielding",
        ],
      },
    ],
  },
};