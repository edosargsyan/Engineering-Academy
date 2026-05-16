import { motion } from "motion/react";
import { useTranslation } from "react-i18next"; 

export function TrustMetrics() {
  const { t } = useTranslation(); 

  const metrics = [
    { value: "150+", key: "metric_engineers" },
    { value: "8", key: "metric_disciplines" },
    { value: "50+", key: "metric_projects" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.key} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 tracking-wide uppercase font-medium">
                {t(metric.key)} 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}