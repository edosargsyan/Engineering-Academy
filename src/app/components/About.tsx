import { motion } from "motion/react";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";
import { useTranslation } from "react-i18next"; 
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
export function About() {
  const { t } = useTranslation(); 

  
  const values = [
    {
      icon: Target,
      key: "val_exc", 
    },
    {
      icon: Lightbulb,
      key: "val_prod",
    },
    {
      icon: Rocket,
      key: "val_inno",
    },
    {
      icon: Users,
      key: "val_cult",
    },
  ];

  return (
    <>
      <Navbar />
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                {t('about_title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>{t('about_p1')}</p>
                <p>{t('about_p2')}</p>
                <p>{t('about_p3')}</p>
                <p className="text-xl font-medium text-gray-900 pt-4">
                  {t('about_p4')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t(`${value.key}_title`)}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t(`${value.key}_desc`)} 
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl -z-10"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}