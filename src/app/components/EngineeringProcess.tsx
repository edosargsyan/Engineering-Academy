import { motion } from "motion/react";
import { Code, Cpu, Users2, Rocket, HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next"; 

export function EngineeringProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Code,
      key: "step_learn",
    },
    {
      icon: Cpu,
      key: "step_build_sys",
    },
    {
      icon: Users2,
      key: "step_collab_team",
    },
    {
      icon: Rocket,
      key: "step_deploy_proj",
    },
    {
      icon: HeartHandshake,
      key: "step_career_supp",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {t('journey_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('journey_subtitle')}
          </p>
        </motion.div>

        <div className="relative space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start space-x-6 group"
            >
              <div className="flex-shrink-0 relative z-10">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-lg transition-all">
                  <step.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t(`${step.key}_title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${step.key}_desc`)}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-[calc(100%-1rem)] bg-gray-200 -z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}