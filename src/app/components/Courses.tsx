import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CourseModal } from "./CourseModal";
import { courseDetails } from "../data/courseDetails";
import { Navbar } from "./Navbar";



export type CourseId = keyof typeof courseDetails;

interface Course {
  id: string;
  dataKey: CourseId;
  technologies: string[];
}

const COURSES_DATA: Course[] = [
  { id: "javascript", dataKey: "JavaScript Engineering", technologies: ["JavaScript", "ES6+", "DOM", "Web APIs"] },
  { id: "devhack", dataKey: "devHack", technologies: ["Kubernetes", "AWS", "Terraform", "CI/CD"] },
  { id: "embedded", dataKey: "Embedded Systems", technologies: ["C/C++", "RTOS", "IoT", "Arduino"] },
  { id: "ai", dataKey: "AI Engineering", technologies: ["Python", "TensorFlow", "LangChain", "Vector DBs"] },
  { id: "software", dataKey: "Software Engineering", technologies: ["Java/C#", "Python", "Git", "UML", "SQL"] },
  { id: "mechanical", dataKey: "Mechanical Engineering", technologies: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB"] },
  { id: "microcontroller", dataKey: "Microcontroller Fundamentals", technologies: ["C", "Assembly", "ARM Cortex-M", "AVR"] },
  { id: "electrical", dataKey: "Electrical Engineering", technologies: ["SPICE", "MATLAB", "Altium Designer", "Oscilloscopes"] },
  { id: "digital_logic", dataKey: "Digital Logic Design", technologies: ["Verilog", "Logisim", "Boolean Algebra"] },
  { id: "fpga", dataKey: "FPGA Engineering", technologies: ["Verilog", "VHDL", "Xilinx Vivado", "Intel Quartus"] },
  { id: "hardware", dataKey: "Hardware Engineering", technologies: ["Altium Designer", "High-Speed PCB", "EMI/EMC", "DFM"] },
  { id: "math", dataKey: "Mathematics", technologies: ["Calculus", "Linear Algebra", "Probability", "Discrete Math"] },
  { id: "physics", dataKey: "Physics", technologies: ["Mechanics", "Electromagnetism", "Thermodynamics", "Optics"] },
  { id: "mobile", dataKey: "Mobile Development", technologies: ["React Native", "Flutter", "Swift", "Kotlin"] },
];

interface CourseCardProps {
  course: Course;
  index: number;
  onOpenSyllabus: (key: CourseId) => void;
}

const CourseCard = React.memo(({ course, index, onOpenSyllabus }: CourseCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {t(`course_${course.id}_title`)}
        </h3>
      </div>
      
      <div className="text-sm text-gray-500 mb-4">
        {t(`course_${course.id}_dur`)}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {course.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium ">
            {tech}
          </span>
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
        {t(`course_${course.id}_desc`)}
      </p>
      
      <div className="flex flex-col space-y-3 mt-auto">
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm text-center rounded-lg hover:bg-gray-800 transition-all focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          {t('prog_register')}
        </a>
        <button
          onClick={() => onOpenSyllabus(course.dataKey)}
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
  const [selectedCourseKey, setSelectedCourseKey] = useState<CourseId | null>(null);

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
                onOpenSyllabus={setSelectedCourseKey} 
              />
            ))}
          </div>
        </div>

        <CourseModal
          isOpen={selectedCourseKey !== null}
          onClose={() => setSelectedCourseKey(null)}
          course={selectedCourseKey ? courseDetails[selectedCourseKey] : null}
        />
      </section>
    </>
  );
}