import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Clock, TrendingUp, Code, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { courseDetails } from "../data/courseDetails";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const COURSES_DATA = [
  { id: "computer_architecture", dataKey: "Computer Architecture", price: "50,000 AMD" },
  { id: "javascript", dataKey: "JavaScript Engineering", price: "60,000 AMD" },
  { id: "devhack", dataKey: "devHack", price: "60,000 AMD" },
  { id: "embedded", dataKey: "Embedded Systems", price: "60,000 AMD" },
  { id: "ai", dataKey: "AI Engineering", price: "60,000 AMD" },
  { id: "software", dataKey: "Software Engineering", price: "60,000 AMD" },
  { id: "robotics", dataKey: "Robotics Engineering", price: "65,000 AMD" },
  { id: "mechanical", dataKey: "Mechanical Engineering", price: "50,000 AMD" },
  { id: "microcontroller", dataKey: "Microcontroller Fundamentals", price: "55,000 AMD" },
  { id: "electrical", dataKey: "Electrical Engineering", price: "60,000 AMD" },
  { id: "compiler", dataKey: "Compiler Engineering", price: "50,000 AMD" },
  { id: "digital_logic", dataKey: "Digital Logic Design", price: "50,000 AMD" },
  { id: "fpga", dataKey: "FPGA Engineering", price: "60,000 AMD" },
  { id: "hardware", dataKey: "Hardware Engineering", price: "75,000 AMD" },
  { id: "mobile", dataKey: "Mobile Development", price: "60,000 AMD" },
  { id: "basic_math", dataKey: "Mathematics", price: "40,000 AMD" },
  { id: "basic_physics", dataKey: "Physics", price: "40,000 AMD" },
  { id: "probability_stats", dataKey: "Probability & Statistics", price: "50,000 AMD" },
  { id: "advanced_math", dataKey: "Advanced Mathematics", price: "50,000 AMD" },
  { id: "applied_physics", dataKey: "Applied Physics", price: "50,000 AMD" },
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
    defaultValue: "https://docs.google.com/forms/u/0/d/1FcvebImT89-HOlijdpydedUs2PKPVKbnDu92C5-g9PI/viewform?edit_requested=true" 
  });

  const hasCustomTechTranslation = t(`course_${currentId}_tech_list`, { defaultValue: "" }) !== "";
  const displayLevel = t(`course_${currentId}_level`, { defaultValue: course.level });

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
    <div key={currentId}>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 md:pt-32 pb-16 md:pb-24">
        
        {/* Back Button */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-6 md:mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t("course_back_btn", "Back")}</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto mx-4  bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-16 mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-4 md:mb-6 tracking-tight leading-tight"
          >
            {t(`course_${currentId}_title`) || course.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-gray-700 mb-6 md:mb-8 "
          >
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 md:w-5 h-5 text-blue-600" />
              <span className="font-medium">{t(`course_${currentId}_dur`) || course.duration}</span>
            </div>
            
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
            
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 md:w-5 h-5 text-violet-600" />
              <span className="font-medium">{displayLevel}</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />

            <div className="flex items-center space-x-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-blue-100 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{t("course_price_label", "Price")}:</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm">{meta.price}</span>
            </div>
            
            {((hasCustomTechTranslation || (course.technologies && course.technologies.length > 0))) && (
              <>
                <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center space-x-2 w-full sm:w-auto mt-1 sm:mt-0">
                  <Code className="w-4 h-4 md:w-5 h-5 text-cyan-600" />
                  <span className="font-medium break-words">
                    {hasCustomTechTranslation 
                      ? t(`course_${currentId}_tech_list`) 
                      : course.technologies.join(" • ")
                    }
                  </span>
                </div>
              </>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mb-8 md:mb-10 "
          >
            {t(`course_${currentId}_desc`) || course.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto text-center px-8 md:px-12 py-3.5 md:py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl text-base md:text-lg font-medium"
            >
              {t('modal_enroll', 'Enroll Now')}
            </a>
          </motion.div>
        </div>

        {/* Outcomes Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            {t('modal_outcomes', 'What you will learn')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {course.outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-start space-x-3 text-sm sm:text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>

        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            {t('modal_curriculum', 'Course Curriculum')}
          </h3>
          <div className="space-y-3 md:space-y-4">
            {course.modules.map((module, index) => (
              <div
                key={module.title}
                className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 md:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3 md:space-x-4 pr-4">
                    <div className="w-9 h-9 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">
                      {index + 1}
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 line-clamp-2 md:line-clamp-none">
                      {t(`course_${cleanId}_mod_${index}_title`) || module.title}
                    </h4>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedModule === index ? "auto" : 0, opacity: expandedModule === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 md:px-8 pb-5 md:pb-6 pt-1 md:pt-2">
                    <div className="pl-12 md:pl-16 space-y-2 md:space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div
                          key={topic}
                          className="flex items-start space-x-2.5 text-sm sm:text-base text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full mt-2 flex-shrink-0" />
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
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 border-t border-gray-100 pt-12 md:pt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            {t('faq_title', 'Frequently Asked Questions')}
          </h3>
          <p className="text-sm md:text-base text-gray-500 text-center mb-8 md:mb-12 max-w-xl mx-auto">
            {t('faq_subtitle', 'Have questions about the program? Find quick operational answers below.')}
          </p>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border-b border-gray-100 pb-3 md:pb-4 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full py-3 md:py-4 flex items-center justify-between text-left group"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-gray-400 group-hover:text-gray-600"
                  >
                    <ChevronDown className="w-4 h-4 md:w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed pr-4 pb-2">
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