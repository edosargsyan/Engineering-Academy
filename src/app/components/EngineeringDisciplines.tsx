import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Terminal, Cpu, Brain, Layout, Cog, Microchip, Zap, 
  Binary, Boxes, CircuitBoard,  Sigma, Atom, Smartphone, 
  Layers, LineChart, Monitor, Bot
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CourseModal } from "./CourseModal";
import { courseDetails } from "../data/courseDetails";

type CourseData = {
  id: string;
  dataKey: string;
  icon: React.ElementType;
  color: string;
  tags: string[];
  price: string;
  formUrl: string;
};

type CourseDataKey = keyof typeof courseDetails;

export function EngineeringDisciplines() {
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const { t } = useTranslation();

  const courses: CourseData[] = [
    {
      id: "computer_architecture",
      dataKey: "Computer Architecture",
      icon: Monitor,
      color: "from-blue-600 to-cyan-600",
      tags: ["CPU Design", "Memory Hierarchy", "Pipelining", "RISC-V"],
      price: "50,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeMLoJjVhCQjyObj1o7ut7wl0lAkrQQIV6eMDYGT8fZyTZeVw/viewform?usp=publish-editor"
    },
    {
      id: "javascript",
      dataKey: "JavaScript Engineering",
      icon: Code2,
      color: "from-yellow-400 to-amber-500",
      tags: ["JavaScript", "ES6+", "DOM", "Web APIs"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/1Eom9yPsu6NnTT15WhTk34HLODjuzwTA_LzQCJRm8MSc"
    },
    {
      id: "devhack",
      dataKey: "devHack",
      icon: Terminal,
      color: "from-slate-700 to-gray-900",
      tags: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeie1ghqvPc2NDhSu9jZUVLvXgtioLuDG_stYzUK6Z8pEarZg/viewform?usp=publish-editor"
    },
    {
      id: "embedded",
      dataKey: "Embedded Systems",
      icon: Cpu,
      color: "from-purple-500 to-violet-600",
      tags: ["C/C++", "RTOS", "IoT", "Arduino"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeFBINKl_JyxZ_tp39DMeEj4DWzfqveVQKf9nEY0rlh6KvGwQ/viewform?usp=publish-editor"
    },
    {
      id: "ai",
      dataKey: "AI Engineering",
      icon: Brain,
      color: "from-pink-500 to-rose-600",
      tags: ["Python", "TensorFlow", "LangChain", "Vector DBs"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/1NzXtvoLyFXR0mX6e4yGDfuAZYJUYI37nQlbl_qg2XYs"
    },
    {
      id: "software",
      dataKey: "Software Engineering",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      tags: ["Java/C#", "Python", "Git", "UML", "SQL"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfvVLuwb8lFUndYVcVIcx7t9BCCUUfKQcB3pO_qY516nbyJqA/viewform"
    },
    {
      id: "robotics",
      dataKey: "Robotics Engineering",
      icon: Bot,
      color: "from-red-600 to-orange-600",
      tags: ["ROS", "Computer Vision", "Control Systems", "Path Planning"],
      price: "65,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdGIyWt6RG7PdRND_Ift2qykkqmzib4P7aW3ts2JM0IH8Spg/viewform?usp=publish-editor"
    },
    {
      id: "compiler",
      dataKey: "Compiler Engineering",
      icon: Layers,
      color: "from-orange-600 to-red-600",
      tags: ["C/C++", "LLVM", "Parser Generators", "Optimization"],
      price: "50,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfe23xGypg6sbuwcWhP4bNEBqhOyOBQiINgnNtLLbvYToVokA/viewform?usp=publish-editor"
    },
    {
      id: "mechanical",
      dataKey: "Mechanical Engineering",
      icon: Cog,
      color: "from-slate-500 to-gray-600",
      tags: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB"],
      price: "50,000 AMD",
      formUrl: "https://docs.google.com/forms/d/1PWptxcS99XIbY_QDxTlul-eDjt5zxEc6kdHDKwPbBis"
    },
    {
      id: "microcontroller",
      dataKey: "Microcontroller Fundamentals",
      icon: Microchip,
      color: "from-emerald-500 to-teal-600",
      tags: ["C", "Assembly", "ARM Cortex-M", "AVR"],
      price: "55,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdGIyWt6RG7PdRND_Ift2qykkqmzib4P7aW3ts2JM0IH8Spg/viewform?usp=publish-editor"
    },
    {
      id: "electrical",
      dataKey: "Electrical Engineering",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      tags: ["SPICE", "MATLAB", "Altium Designer", "Oscilloscopes"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/1eB4MdUkbGVmIiaGflDpYSMIkadba4a7vUP8cSdqEEEY"
    },
    {
      id: "digital_logic",
      dataKey: "Digital Logic Design",
      icon: Binary,
      color: "from-indigo-500 to-blue-600",
      tags: ["Verilog", "Logisim", "Boolean Algebra"],
      price: "50,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScwOBJg2in86omQ3PgPk3GHc3LPOnj9FVnWSvPAhcMnbTUSfA/viewform"
    },
    {
      id: "fpga",
      dataKey: "FPGA Engineering",
      icon: Boxes,
      color: "from-teal-500 to-emerald-600",
      tags: ["Verilog", "VHDL", "Xilinx Vivado", "Intel Quartus"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSczE7fm4qClHSa_sfGm-LmpOdpSXd72MXiDYXH-H7TdKvbe5A/viewform"
    },
    {
      id: "hardware",
      dataKey: "Hardware Engineering",
      icon: CircuitBoard,
      color: "from-red-500 to-rose-600",
      tags: ["Altium Designer", "High-Speed PCB", "EMI/EMC", "DFM"],
      price: "75,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdQQ6q6Y548pUDuzNjvThtC0UWzUcwRQvSIqWs7lD__58wQJw/viewform?usp=publish-editor"
    },
    {
      id: "basic_math",
      dataKey: "Mathematics",
      icon: Sigma,
      color: "from-blue-600 to-indigo-700",
      tags: ["Algebra", "Geometry", "Trigonometry", "Vectors", "Calculus"],
      price: "40,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfvVLuwb8lFUndYVcVIcx7t9BCCUUfKQcB3pO_qY516nbyJqA/viewform?usp=publish-editor"
    },
    {
      id: "probability_stats",
      dataKey: "Probability & Statistics",
      icon: LineChart,
      color: "from-teal-600 to-cyan-700",
      tags: ["Bayesian Inference", "Distributions", "A/B Testing", "MLE"],
      price: "50,000 AMD",
      formUrl: "https://docs.google.com/forms/d/1sHZvzYtFFWVCQpCOTNkgPEVeHoMFTqttReTfs4TH6bs"
    },
    {
      id: "basic_physics",
      dataKey: "Physics",
      icon: Atom,
      color: "from-sky-500 to-blue-600",
      tags: ["Mechanics", "Thermodynamics", "Electrostatics", "Optics"],
      price: "40,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSclZwDuZzwYO1KM41NxbS1yaKo-_eRyI2r96LRrPufUwZKjHg/viewform?usp=publish-editor"
    },
    {
      id: "advanced_math",
      dataKey: "Advanced Mathematics",
      icon: Sigma,
      color: "from-indigo-600 to-purple-700",
      tags: ["Linear Algebra", "Calculus", "SVD", "Discrete Math"],
      price: "50,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeX_qndaM4zScsXY8T4EBafWD6NMzPSuVDQuFb1XfG4EqByAA/viewform?usp=publish-editor"
    },
    {
      id: "applied_physics",
      dataKey: "Applied Physics",
      icon: Atom,
      color: "from-cyan-500 to-blue-600",
      tags: ["Electromagnetism", "Maxwell Equations", "Semiconductors", "EMC"],
      price: "50,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeaePEUqgVWxL-NlipStcu0nXPQG5s00xurnKQ7Cz7H5UT8iw/viewform?usp=publish-editor"
    },
    {
      id: "mobile",
      dataKey: "Mobile Development",
      icon: Smartphone,
      color: "from-violet-500 to-purple-600",
      tags: ["React Native", "Flutter", "Swift", "Kotlin"],
      price: "60,000 AMD",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfUq-c6-qEs0EG0rfjsXlqTEKlVmBxu7nBM2gzApfVAhQx8Zw/viewform?usp=publish-editor"
    }
  ];

  const courseDetail = selectedCourse
    ? courseDetails[selectedCourse.dataKey as CourseDataKey] ?? null
    : null;

  return (
    <>
      <Navbar />
      <section id="programs" className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('prog_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('prog_subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 shadow-sm">
                      {course.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all">
                    {t(`course_${course.id}_title`)}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {t(`course_${course.id}_desc`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="mt-auto w-full px-4 py-3 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all group-hover:shadow-lg relative z-20"
                  >
                    {t('prog_syllabus')}
                  </button>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/0 to-violet-100/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CourseModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        course={courseDetail}
        courseId={selectedCourse?.id ?? null}
      />

      <Footer />
    </>
  );
}