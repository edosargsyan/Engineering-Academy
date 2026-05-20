import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";
import { useTranslation } from "react-i18next"; 
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function About() {
  const { t } = useTranslation(); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const values = useMemo(() => [
    { icon: Target, key: "val_exc" },
    { icon: Lightbulb, key: "val_prod" },
    { icon: Rocket, key: "val_inno" },
    { icon: Users, key: "val_cult" },
  ], []);

  const textAnimationVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const gridAnimationVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.12, duration: 0.4, ease: "easeOut" }
    })
  };

  return (
    <>
      <Navbar />
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 bg-white overflow-hidden will-change-transform">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={isMobile ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={textAnimationVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
                {t('about_title')}
              </h2>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>{t('about_p1')}</p>
                <p>{t('about_p2')}</p>
                <p>{t('about_p3')}</p>
                <p className="text-lg sm:text-xl font-medium text-gray-900 pt-2 md:pt-4">
                  {t('about_p4')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={isMobile ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={gridAnimationVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.key}
                    initial={isMobile ? "visible" : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    variants={cardVariants}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 ease-out"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <value.icon className="w-6 h-6 text-white" aria-hidden="true" />
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

              {!isMobile && (
                <>
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl -z-10 pointer-events-none"
                  />
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl -z-10 pointer-events-none"
                  />
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}