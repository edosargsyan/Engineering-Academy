import { motion } from "motion/react";
import { Lightbulb, Wrench, Layers, Target, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next"; 

export function EngineeringPhilosophy() {
  const { t } = useTranslation();

  const principles = [
    {
      icon: Lightbulb,
      key: "prin_think",
    },
    {
      icon: Wrench,
      key: "prin_build",
    },
    {
      icon: Layers,
      key: "prin_integrate",
    },
    {
      icon: Target,
      key: "prin_solve",
    },
    {
      icon: Users,
      key: "prin_collab",
    },
    {
      icon: Zap,
      key: "prin_innovate",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

   
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>  

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
            {t('phil_mission')}
          </div>
          <h2 className="text-4xl lg:text-6xl  font-bold mb-8 bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t('phil_title')}
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('phil_desc1')}
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('phil_desc2')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white pt-2">
                  {t(`${principle.key}_title`)}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed pl-16">
                {t(`${principle.key}_desc`)}
              </p>

             
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            {t('phil_cta_title')}
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            {t('phil_cta_desc')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeq9dtzCXJehscBCsEV5SCRak0NhiALIOLj6kf_rj50d-CYrQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl font-semibold text-lg"
            >
              {t('phil_btn_apply')}
            </a>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}