import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal, Cpu, Brain, Layout, Cog, Microchip, Zap, Binary, Boxes, CircuitBoard, Sigma, Atom, Smartphone, Layers, LineChart, Monitor, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { courseDetails } from "../data/courseDetails";
import { Navbar } from "./Navbar";
import { CourseModal } from "./CourseModal";

export type CourseId = keyof typeof courseDetails;

interface Course {
  id: string;
  dataKey: CourseId;
  technologies: string[];
  price: string;
  formUrl: string;
  icon: React.ElementType;
  color: string;
}

const COURSES_DATA: Course[] = [
  { 
    id: "computer_architecture", 
    dataKey: "Computer Architecture",
    icon: Monitor,
    color: "from-blue-600 to-cyan-600",
    technologies: ["CPU Design", "Memory Hierarchy", "Pipelining", "RISC-V"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeMLoJjVhCQjyObj1o7ut7wl0lAkrQQIV6eMDYGT8fZyTZeVw/viewform?usp=publish-editor"
  },
  { 
    id: "javascript", 
    dataKey: "JavaScript Engineering",
    icon: Code2,
    color: "from-yellow-400 to-amber-500",
    technologies: ["JavaScript", "ES6+", "DOM", "Web APIs"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1Eom9yPsu6NnTT15WhTk34HLODjuzwTA_LzQCJRm8MSc"
  },
  { 
    id: "devhack", 
    dataKey: "devHack",
    icon: Terminal,
    color: "from-slate-700 to-gray-900",
    technologies: ["Kubernetes", "AWS", "Terraform", "CI/CD"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeie1ghqvPc2NDhSu9jZUVLvXgtioLuDG_stYzUK6Z8pEarZg/viewform?usp=publish-editor"
  },
  { 
    id: "embedded", 
    dataKey: "Embedded Systems",
    icon: Cpu,
    color: "from-purple-500 to-violet-600",
    technologies: ["C/C++", "RTOS", "IoT", "Arduino"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeFBINKl_JyxZ_tp39DMeEj4DWzfqveVQKf9nEY0rlh6KvGwQ/viewform?usp=publish-editor"
  },
  { 
    id: "ai", 
    dataKey: "AI Engineering",
    icon: Brain,
    color: "from-pink-500 to-rose-600",
    technologies: ["Python", "TensorFlow", "LangChain", "Vector DBs"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1NzXtvoLyFXR0mX6e4yGDfuAZYJUYI37nQlbl_qg2XYs"
  },
  { 
    id: "software", 
    dataKey: "Software Engineering",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    technologies: ["Java/C#", "Python", "Git", "UML", "SQL"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1zNkvToknI44qlOnMksnEb5BXZe9snICmRf6o9TgpThc"
  },
  {
    id: "robotics",
    dataKey: "Robotics Engineering",
    icon: Bot,
    color: "from-red-600 to-orange-600",
    technologies: ["ROS", "Computer Vision", "Control Systems", "Path Planning"],
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1sHZvzYtFFWVCQpCOTNkgPEVeHoMFTqttReTfs4TH6bs"
  },
  { 
    id: "mechanical", 
    dataKey: "Mechanical Engineering",
    icon: Cog,
    color: "from-slate-500 to-gray-600",
    technologies: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1PWptxcS99XIbY_QDxTlul-eDjt5zxEc6kdHDKwPbBis"
  },
  { 
    id: "microcontroller", 
    dataKey: "Microcontroller Fundamentals",
    icon: Microchip,
    color: "from-emerald-500 to-teal-600",
    technologies: ["C", "Assembly", "ARM Cortex-M", "AVR"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdGIyWt6RG7PdRND_Ift2qykkqmzib4P7aW3ts2JM0IH8Spg/viewform?usp=publish-editor"
  },
  { 
    id: "electrical", 
    dataKey: "Electrical Engineering",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    technologies: ["SPICE", "MATLAB", "Altium Designer", "Oscilloscopes"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1eB4MdUkbGVmIiaGflDpYSMIkadba4a7vUP8cSdqEEEY"
  },
  { 
    id: "compiler", 
    dataKey: "Compiler Engineering",
    icon: Layers,
    color: "from-orange-600 to-red-600",
    technologies: ["C/C++", "LLVM", "Parser Generators", "Optimization"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfe23xGypg6sbuwcWhP4bNEBqhOyOBQiINgnNtLLbvYToVokA/viewform?usp=publish-editor"
  },
  { 
    id: "digital_logic", 
    dataKey: "Digital Logic Design",
    icon: Binary,
    color: "from-indigo-500 to-blue-600",
    technologies: ["Verilog", "Logisim", "Boolean Algebra"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScwOBJg2in86omQ3PgPk3GHc3LPOnj9FVnWSvPAhcMnbTUSfA/viewform"
  },
  { 
    id: "fpga", 
    dataKey: "FPGA Engineering",
    icon: Boxes,
    color: "from-teal-500 to-emerald-600",
    technologies: ["Verilog", "VHDL", "Xilinx Vivado", "Intel Quartus"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSczE7fm4qClHSa_sfGm-LmpOdpSXd72MXiDYXH-H7TdKvbe5A/viewform"
  },
  { 
    id: "hardware", 
    dataKey: "Hardware Engineering",
    icon: CircuitBoard,
    color: "from-red-500 to-rose-600",
    technologies: ["Altium Designer", "High-Speed PCB", "EMI/EMC", "DFM"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdQQ6q6Y548pUDuzNjvThtC0UWzUcwRQvSIqWs7lD__58wQJw/viewform?usp=publish-editor"
  },
  { 
    id: "mobile", 
    dataKey: "Mobile Development",
    icon: Smartphone,
    color: "from-violet-500 to-purple-600",
    technologies: [ "Flutter","Dart"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfUq-c6-qEs0EG0rfjsXlqTEKlVmBxu7nBM2gzApfVAhQx8Zw/viewform?usp=publish-editor"
  },
  { 
    id: "basic_math", 
    dataKey: "Mathematics",
    icon: Sigma,
    color: "from-blue-600 to-indigo-700",
    technologies: ["Algebra", "Geometry", "Trigonometry", "Vectors", "Calculus", "Mathematical Modeling"], 
    price: "30,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfvVLuwb8lFUndYVcVIcx7t9BCCUUfKQcB3pO_qY516nbyJqA/viewform?usp=publish-editor"
  },
  { 
    id: "basic_physics", 
    dataKey: "Physics",
    icon: Atom,
    color: "from-sky-500 to-blue-600",
    technologies: ["Mechanics", "Thermodynamics", "Electrostatics", "Optics"], 
    price: "30,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSclZwDuZzwYO1KM41NxbS1yaKo-_eRyI2r96LRrPufUwZKjHg/viewform?usp=publish-editor"
  },
  { 
    id: "probability_stats", 
    dataKey: "Probability & Statistics",
    icon: LineChart,
    color: "from-teal-600 to-cyan-700",
    technologies: ["Bayesian Inference", "Distributions", "A/B Testing", "MLE"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerNKujdgN79IeET43r9z2L7p0ZjfGbn9L5iSknupFswKl0_Q/viewform?usp=publish-editor"
  },
  { 
    id: "advanced_math", 
    dataKey: "Advanced Mathematics",
    icon: Sigma,
    color: "from-indigo-600 to-purple-700",
    technologies: ["Linear Algebra", "Calculus", "SVD", "Discrete Math"], 
    price: "40,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeX_qndaM4zScsXY8T4EBafWD6NMzPSuVDQuFb1XfG4EqByAA/viewform?usp=publish-editor"
  },
  { 
    id: "applied_physics", 
    dataKey: "Applied Physics",
    icon: Atom,
    color: "from-cyan-500 to-blue-600",
    technologies: ["Electromagnetism", "Maxwell Equations", "Semiconductors", "EMC"], 
    price: "40,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeaePEUqgVWxL-NlipStcu0nXPQG5s00xurnKQ7Cz7H5UT8iw/viewform?usp=publish-editor"
  },
];

interface CourseCardProps {
  course: Course;
  index: number;
  onOpenModal: (course: Course) => void;
}

const CourseCard = React.memo(({ course, index, onOpenModal }: CourseCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      onClick={handleCardClick}
      className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <course.icon className="w-6 h-6 text-white" />
        </div>
        <span className="font-semibold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-md text-sm">
          {course.price}
        </span>
      </div>

      
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {t(`course_${course.id}_title`)}
      </h3>
      <span className="text-sm text-gray-500 mb-4">
        {t(`course_${course.id}_dur`)}
      </span>

   
      <div className="flex flex-wrap gap-2 mb-6">
        {course.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm">
        {t(`course_${course.id}_desc`)}
      </p>

      <div className="flex flex-col space-y-3 mt-auto">
        <a
          href={course.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm text-center rounded-lg hover:bg-gray-800 transition-all focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          {t('prog_register')}
        </a>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(course);
          }}
          className="group/btn flex items-center justify-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors py-2"
        >
          <span className="text-sm font-medium">{t('prog_syllabus')}</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
});

CourseCard.displayName = "CourseCard";

export function Courses() {
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const activeCourseDetail = selectedCourse ? courseDetails[selectedCourse.dataKey] : null;

  return (
    <>
      <Navbar />
      <section id="programs" className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t('prog_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('prog_subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COURSES_DATA.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                onOpenModal={setSelectedCourse}
              />
            ))}
          </div>
        </div>
      </section>

      <CourseModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        course={activeCourseDetail}
        courseId={selectedCourse ? selectedCourse.id : null}
      />
    </>
  );
}