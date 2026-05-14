import { motion } from "motion/react";
import { BookText, FlaskConical, Blocks, GitBranch, CloudUpload, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next"; 

export function HowWeTeach() {
  const { t } = useTranslation(); 

  const steps = [
    {
      icon: BookText,
      key: "step_theory",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FlaskConical,
      key: "step_labs",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Blocks,
      key: "step_build",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: GitBranch,
      key: "step_collab",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: CloudUpload,
      key: "step_deploy",
      color: "from-emerald-500 to-violet-500",
    },
    {
      icon: Briefcase,
      key: "step_career",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {t('how_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('how_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t(`${step.key}_title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${step.key}_desc`)}
                </p>
              </div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            {t('how_cta_title')}
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            {t('how_cta_desc')}
          </p>
          <a
            href="https://docs.google.com/forms/d/1FcvebImT89-HOlijdpydedUs2PKPVKbnDu92C5-g9PI/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl font-semibold text-lg"
          >
            {t('how_cta_btn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}