import { motion } from "motion/react";
import { Microscope, Cpu, Boxes, Users, Sparkles, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next"; 

export function LabsFacilities() {
  const { t } = useTranslation(); 

  const labs = [
    {
      icon: Cpu,
      key: "lab_ai",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Boxes,
      key: "lab_robotics",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Microscope,
      key: "lab_electronics",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Workflow,
      key: "lab_embedded",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      key: "lab_mechanical",
      gradient: "from-slate-500 to-gray-600",
    },
    {
      icon: Users,
      key: "lab_studios",
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
            {t('labs_badge')}
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            {t('labs_title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('labs_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <motion.div
              key={lab.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${lab.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                <lab.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {t(`${lab.key}_name`)}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {t(`${lab.key}_desc`)}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        
         
        </motion.div>
      </div>
    </section>
  );
}