import { motion } from "motion/react";
import { ArrowRight, } from "lucide-react";
import { useTranslation } from "react-i18next"; 

export function Hero() {
  const { t } = useTranslation(); 

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-violet-50/30 -z-10" />

      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero_title_1')}
              <br />
              {t('hero_title_2')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              {t('hero_desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeq9dtzCXJehscBCsEV5SCRak0NhiALIOLj6kf_rj50d-CYrQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl flex items-center space-x-2"
              >
                <span>{t('hero_btn_join')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 10 10 L 50 10 M 30 0 L 30 20 M 50 30 L 10 30 M 30 60 L 30 40"
                            stroke="#6366f1" strokeWidth="2" fill="none"/>
                      <circle cx="30" cy="30" r="4" fill="#6366f1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl backdrop-blur-sm border border-white/40 shadow-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-3xl backdrop-blur-sm border border-white/40 shadow-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8"
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-1" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-2/3" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full w-5/6" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-4 text-white text-xs font-mono shadow-lg">
                      <div className="text-green-400">&gt; engineer.build()</div>
                      <div className="text-blue-400 mt-1">⚡ {t('hero_console_ready')}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                        <div className="text-2xl">💻</div>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <div className="text-2xl">⚡</div>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                        <div className="text-2xl">🤖</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}