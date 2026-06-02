import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Clock, TrendingUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { courseDetails } from "../data/courseDetails";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const COURSES_DATA = [
  { 
    id: "computer_architecture", 
    dataKey: "Computer Architecture",
    color: "from-blue-600 to-cyan-600",
    technologies: ["CPU Design", "Memory Hierarchy", "Pipelining", "RISC-V"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeMLoJjVhCQjyObj1o7ut7wl0lAkrQQIV6eMDYGT8fZyTZeVw/viewform?usp=publish-editor"
  },
  { 
    id: "javascript", 
    dataKey: "JavaScript Engineering",
    color: "from-yellow-400 to-amber-500",
    technologies: ["JavaScript", "ES6+", "DOM", "Web APIs"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1Eom9yPsu6NnTT15WhTk34HLODjuzwTA_LzQCJRm8MSc"
  },
  { 
    id: "devhack", 
    dataKey: "devHack",
    color: "from-slate-700 to-gray-900",
    technologies: ["Kubernetes", "AWS", "Terraform", "CI/CD"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeie1ghqvPc2NDhSu9jZUVLvXgtioLuDG_stYzUK6Z8pEarZg/viewform?usp=publish-editor"
  },
  { 
    id: "embedded", 
    dataKey: "Embedded Systems",
    color: "from-purple-500 to-violet-600",
    technologies: ["C/C++", "RTOS", "IoT", "Arduino"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeFBINKl_JyxZ_tp39DMeEj4DWzfqveVQKf9nEY0rlh6KvGwQ/viewform?usp=publish-editor"
  },
  { 
    id: "ai", 
    dataKey: "AI Engineering",
    color: "from-pink-500 to-rose-600",
    technologies: ["Python", "TensorFlow", "LangChain", "Vector DBs"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1NzXtvoLyFXR0mX6e4yGDfuAZYJUYI37nQlbl_qg2XYs"
  },
  { 
    id: "software", 
    dataKey: "Software Engineering",
    color: "from-blue-500 to-cyan-500",
    technologies: ["Java/C#", "Python", "Git", "UML", "SQL"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1zNkvToknI44qlOnMksnEb5BXZe9snICmRf6o9TgpThc"
  },
  {
    id: "robotics",
    dataKey: "Robotics Engineering",
    color: "from-red-600 to-orange-600",
    technologies: ["ROS", "Computer Vision", "Control Systems", "Path Planning"],
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1sHZvzYtFFWVCQpCOTNkgPEVeHoMFTqttReTfs4TH6bs"
  },
  { 
    id: "mechanical", 
    dataKey: "Mechanical Engineering",
    color: "from-slate-500 to-gray-600",
    technologies: ["AutoCAD", "SolidWorks", "ANSYS", "MATLAB"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1PWptxcS99XIbY_QDxTlul-eDjt5zxEc6kdHDKwPbBis"
  },
  { 
    id: "microcontroller", 
    dataKey: "Microcontroller Fundamentals",
    color: "from-emerald-500 to-teal-600",
    technologies: ["C", "Assembly", "ARM Cortex-M", "AVR"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdGIyWt6RG7PdRND_Ift2qykkqmzib4P7aW3ts2JM0IH8Spg/viewform?usp=publish-editor"
  },
  { 
    id: "electrical", 
    dataKey: "Electrical Engineering",
    color: "from-amber-500 to-orange-500",
    technologies: ["SPICE", "MATLAB", "Altium Designer", "Oscilloscopes"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/1eB4MdUkbGVmIiaGflDpYSMIkadba4a7vUP8cSdqEEEY"
  },
  { 
    id: "compiler", 
    dataKey: "Compiler Engineering",
    color: "from-orange-600 to-red-600",
    technologies: ["C/C++", "LLVM", "Parser Generators", "Optimization"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfe23xGypg6sbuwcWhP4bNEBqhOyOBQiINgnNtLLbvYToVokA/viewform?usp=publish-editor"
  },
  { 
    id: "digital_logic", 
    dataKey: "Digital Logic Design",
    color: "from-indigo-500 to-blue-600",
    technologies: ["Verilog", "Logisim", "Boolean Algebra"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScwOBJg2in86omQ3PgPk3GHc3LPOnj9FVnWSvPAhcMnbTUSfA/viewform"
  },
  { 
    id: "fpga", 
    dataKey: "FPGA Engineering",
    color: "from-teal-500 to-emerald-600",
    technologies: ["Verilog", "VHDL", "Xilinx Vivado", "Intel Quartus"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSczE7fm4qClHSa_sfGm-LmpOdpSXd72MXiDYXH-H7TdKvbe5A/viewform"
  },
  { 
    id: "hardware", 
    dataKey: "Hardware Engineering",
    color: "from-red-500 to-rose-600",
    technologies: ["Altium Designer", "High-Speed PCB", "EMI/EMC", "DFM"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdQQ6q6Y548pUDuzNjvThtC0UWzUcwRQvSIqWs7lD__58wQJw/viewform?usp=publish-editor"
  },
  { 
    id: "mobile", 
    dataKey: "Mobile Development",
    color: "from-violet-500 to-purple-600",
    technologies: [ "Flutter","Dart"], 
    price: "60,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfUq-c6-qEs0EG0rfjsXlqTEKlVmBxu7nBM2gzApfVAhQx8Zw/viewform?usp=publish-editor"
  },
  { 
    id: "basic_math", 
    dataKey: "Mathematics",
    color: "from-blue-600 to-indigo-700",
    technologies: ["Algebra", "Geometry", "Trigonometry", "Vectors", "Calculus", "Mathematical Modeling"], 
    price: "30,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfvVLuwb8lFUndYVcVIcx7t9BCCUUfKQcB3pO_qY516nbyJqA/viewform?usp=publish-editor"
  },
  { 
    id: "basic_physics", 
    dataKey: "Physics",
    color: "from-sky-500 to-blue-600",
    technologies: ["Mechanics", "Thermodynamics", "Electrostatics", "Optics"], 
    price: "30,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSclZwDuZzwYO1KM41NxbS1yaKo-_eRyI2r96LRrPufUwZKjHg/viewform?usp=publish-editor"
  },
  { 
    id: "probability_stats", 
    dataKey: "Probability & Statistics",
    color: "from-teal-600 to-cyan-700",
    technologies: ["Bayesian Inference", "Distributions", "A/B Testing", "MLE"], 
    price: "50,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerNKujdgN79IeET43r9z2L7p0ZjfGbn9L5iSknupFswKl0_Q/viewform?usp=publish-editor"
  },
  { 
    id: "advanced_math", 
    dataKey: "Advanced Mathematics",
    color: "from-indigo-600 to-purple-700",
    technologies: ["Linear Algebra", "Calculus", "SVD", "Discrete Math"], 
    price: "40,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeX_qndaM4zScsXY8T4EBafWD6NMzPSuVDQuFb1XfG4EqByAA/viewform?usp=publish-editor"
  },
  { 
    id: "applied_physics", 
    dataKey: "Applied Physics",
    color: "from-cyan-500 to-blue-600",
    technologies: ["Electromagnetism", "Maxwell Equations", "Semiconductors", "EMC"], 
    price: "40,000 AMD",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeaePEUqgVWxL-NlipStcu0nXPQG5s00xurnKQ7Cz7H5UT8iw/viewform?usp=publish-editor"
  },
] as const;

type CourseDataKey = typeof COURSES_DATA[number]["dataKey"];

export const CoursesPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const currentId = params.courseId || params.id;
  
  useEffect(() => {
    setExpandedModule(0);
    setExpandedFaq(null);
    window.scrollTo(0, 0);
  }, [currentId]);

  const meta = COURSES_DATA.find((c) => c.id === currentId);
  const course = meta ? courseDetails[meta.dataKey as CourseDataKey] : null;

  if (!course || !currentId || !meta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <button 
            onClick={() => navigate("/")}
            className="inline-flex items-center space-x-2 text-blue-600 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Programs</span>
          </button>
        </div>
      </div>
    );
  }

  const cleanId = currentId.replace("basic_", "");

  const registrationLink = t(`course_${cleanId}_form_url`, { 
    defaultValue: meta.formUrl 
  });

  const hasCustomTechTranslation = t(`course_${currentId}_tech_list`, { defaultValue: "" }) !== "";
  const displayLevel = t(`course_${currentId}_level`, { defaultValue: course.level });

  const techList = hasCustomTechTranslation 
    ? t(`course_${currentId}_tech_list`).split("•").map(s => s.trim())
    : course.technologies || [];

  const faqItems = [
    {
      question: t("faq_q1", "How do classes take place?"),
      answer: t("faq_a1", "Classes are held in an interactive online or offline format with a strong focus on practice. Each lecture is accompanied by hands-on assignments and code reviews from mentors.")
    },
    {
      question: t("faq_q2", "Is any prior preparation required?"),
      answer: t("faq_a2", "For advanced courses such as Mathematics or Physics for Engineering, having basic school-level knowledge is recommended. No prior preparation is required for introductory courses.")
    },
    {
      question: t("faq_q3", "Is a certificate awarded upon completion?"),
      answer: t("faq_a3", "Yes, all students who successfully complete the final projects and pass the practical evaluations will receive an official graduation certificate.")
    },
    {
      question: t("faq_q4", "Can I combine the training with work or study?"),
      answer: t("faq_a4", "The schedule is designed flexibly and optimized for students and working professionals. Recorded sessions of all classes are available in the dashboard 24/7.")
    }
  ];

  return (
    <div key={currentId} className="bg-white min-h-screen font-sans antialiased selection:bg-blue-500/10 text-slate-900">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-24">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 mb-10 mt-20 "
          >
            {t(`course_${currentId}_title`) || course.title}
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techList.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-sm font-medium tracking-wide border border-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0b1329] text-white font-semibold px-10 py-4 rounded-full shadow-sm hover:bg-[#132247] hover:shadow-md transition-all duration-200 text-base"
            >
              {t('modal_enroll', 'Enroll Now')}
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-24">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col items-start">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">
              {t('course_meta_duration_title', 'Duration')}
            </h3>
            <p className="text-slate-600 font-medium mb-1">
              {t(`course_${currentId}_dur`) || course.duration}
            </p>
            <p className="text-slate-400 text-sm">
              {t('course_weekly_frequency', '3-6 times a week')}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] flex flex-col items-start">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-2">
              {t('course_meta_level_title', 'Skill Level')}
            </h3>
            <p className="text-slate-600 font-medium mb-1">
              {displayLevel}
            </p>
            <p className="text-slate-400 text-sm">
              {t(`course_${currentId}_prerequisites`, 'No prerequisites required')}
            </p>
          </div>

        </div>

        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 tracking-tight">
            {t('modal_curriculum', 'Course Curriculum')}
          </h2>
          
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-24 ">
          {course.modules.map((module, index) => (
            <div
              key={module.title}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_-3px_rgba(0,0,0,0.01)] transition-all duration-200"
            >
              <button
                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center space-x-4 md:space-x-6 pr-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 font-bold text-sm flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-slate-900">
                    {t(`course_${cleanId}_mod_${index}_title`) || module.title}
                  </h4>
                </div>
                <motion.div
                  animate={{ rotate: expandedModule === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-slate-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: expandedModule === index ? "auto" : 0, opacity: expandedModule === index ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden bg-slate-50/30"
              >
                <div className="px-6 md:px-8 pb-6 pt-2 border-t border-slate-50">
                  <div className="pl-14 space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div
                        key={topic}
                        className="flex items-start space-x-3 text-base text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0" />
                        <span>
                          {t(`course_${cleanId}_mod_${index}_topic_${topicIndex}`) || topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto border-t border-slate-100 pt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-2 text-center tracking-tight">
            {t('faq_title', 'Frequently Asked Questions')}
          </h3>
          <p className="text-slate-400 text-center mb-12 max-w-md mx-auto text-sm">
            {t('faq_subtitle', 'Have questions about the program? Find quick operational answers below.')}
          </p>

          <div className="max-w-3xl mx-auto space-y-2">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border-b border-slate-100 pb-2"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full py-4 flex items-center justify-between text-left group"
                >
                  <span className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-slate-400 group-hover:text-slate-600"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-slate-600 leading-relaxed pb-4 pr-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};