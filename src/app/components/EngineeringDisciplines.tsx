import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Brain, 
  Layout, 
  Cog, 
  Microchip, 
  Zap, 
  Binary, 
  Boxes, 
  CircuitBoard,
  X 
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type CourseData = {
  id: string;
  dataKey: string;
  icon: React.ElementType;
  color: string;
  tags: string[];
};

export function EngineeringDisciplines() {
  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const { t } = useTranslation();

  const courses: CourseData[] = [
    {
      id: "javascript",
      dataKey: "JavaScript Engineering",
      icon: Code2,
      color: "from-yellow-400 to-amber-500",
      tags: ["JavaScript", "ES6+", "DOM", "Web APIs"],
    },
    {
      id: "devhack",
      dataKey: "devHack",
      icon: Terminal,
      color: "from-slate-700 to-gray-900",
      tags: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
    },
    {
      id: "embedded",
      dataKey: "Embedded Systems",
      icon: Cpu,
      color: "from-purple-500 to-violet-600",
      tags: ["C/C++", "RTOS", "IoT", "Arduino"],
    },
    {
      id: "ai",
      dataKey: "AI Engineering",
      icon: Brain,
      color: "from-pink-500 to-rose-600",
      tags: ["Python", "TensorFlow", "LangChain", "Vector DBs"],
    },
    {
      id: "software",
      dataKey: "Software Engineering",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      tags: ["Java/C#", "Python", "Git", "UML", "SQL"],
    },
    {
      id: "mechanical",
      dataKey: "Mechanical Engineering",
      icon: Cog,
      color: "from-slate-500 to-gray-600",
      tags: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB"],
    },
    {
      id: "microcontroller",
      dataKey: "Microcontroller Fundamentals",
      icon: Microchip,
      color: "from-emerald-500 to-teal-600",
      tags: ["C", "Assembly", "ARM Cortex-M", "AVR"],
    },
    {
      id: "electrical",
      dataKey: "Electrical Engineering",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      tags: ["SPICE", "MATLAB", "Altium Designer", "Oscilloscopes"],
    },
    {
      id: "digital_logic",
      dataKey: "Digital Logic Design",
      icon: Binary,
      color: "from-indigo-500 to-blue-600",
      tags: ["Verilog", "Logisim", "Boolean Algebra"],
    },
    {
      id: "fpga",
      dataKey: "FPGA Engineering",
      icon: Boxes,
      color: "from-teal-500 to-emerald-600",
      tags: ["Verilog", "VHDL", "Xilinx Vivado", "Intel Quartus"],
    },
    {
      id: "hardware",
      dataKey: "Hardware Engineering",
      icon: CircuitBoard,
      color: "from-red-500 to-rose-600",
      tags: ["Altium Designer", "High-Speed PCB", "EMI/EMC", "DFM"],
    },
  ];

  if (typeof document !== 'undefined') {
    document.body.style.overflow = selectedCourse ? 'hidden' : 'unset';
  }

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
                  <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <course.icon className="w-8 h-8 text-white" />
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

      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <div className={`p-8 pb-6 bg-gradient-to-br ${selectedCourse.color} text-white relative`}>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-6 right-6 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/30">
                  <selectedCourse.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-2">
                  {t(`course_${selectedCourse.id}_title`)}
                </h3>
                <p className="text-white/80 text-lg">
                  {t(`course_${selectedCourse.id}_dur`)}
                </p>
              </div>

              <div className="p-8 overflow-y-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('about')}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                   {t(`course_${selectedCourse.id}_desc`)}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('technologies')}
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedCourse.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    {t('close')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}