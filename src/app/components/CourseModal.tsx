import { motion, AnimatePresence } from "motion/react";
import { X, Clock, TrendingUp, Code, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next"; 

interface Module {
  title: string;
  topics: string[];
}

interface CourseDetail {
  title: string;
  duration: string;
  level: string;
  technologies: string[];
  outcomes: string[];
  description: string;
  modules: Module[];
}

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseDetail | null;
}

export function CourseModal({ isOpen, onClose, course }: CourseModalProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const { t } = useTranslation(); 

  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-10"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="bg-gradient-to-br from-blue-50 to-violet-50 px-12 py-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl font-bold text-gray-900 mb-6"
                  >
                    {course.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center gap-4 text-gray-700 mb-8"
                  >
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-violet-600" />
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-cyan-600" />
                      <span className="font-medium">{course.technologies.join(" • ")}</span>
                    </div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-700 leading-relaxed max-w-3xl"
                  >
                    {course.description}
                  </motion.p>
                </div>

                <div className="px-12 py-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">
                    {t('modal_outcomes')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-12">
                    {course.outcomes.map((outcome, index) => (
                      <motion.div
                        key={outcome}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-8">
                    {t('modal_curriculum')}
                  </h3>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <motion.div
                        key={module.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all"
                      >
                        <button
                          onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                          className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">
                              {module.title}
                            </h4>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedModule === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedModule === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-6 pt-2">
                                <div className="pl-16 space-y-3">
                                  {module.topics.map((topic, topicIndex) => (
                                    <motion.div
                                      key={topic}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: topicIndex * 0.05 }}
                                      className="flex items-center space-x-3 text-gray-700"
                                    >
                                      <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full" />
                                      <span>{topic}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 flex justify-center">
                    <a
                      href="https://docs.google.com/forms/d/1FcvebImT89-HOlijdpydedUs2PKPVKbnDu92C5-g9PI/viewform?edit_requested=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-12 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl text-lg font-medium"
                    >
                      {t('modal_enroll')} 
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}