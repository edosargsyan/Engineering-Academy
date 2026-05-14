import { motion } from "motion/react";
import { Send, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next"; 
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ContactForm() {
  const { t } = useTranslation(); 

  return (
    <>
      <Navbar />
      <section id="contact" className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t('contact_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact_subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact_name_label')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('contact_name_placeholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact_email_label')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={t('contact_email_placeholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact_goals_label')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder={t('contact_goals_placeholder')}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                <span>{t('contact_submit')}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center text-sm text-gray-600 mb-4">
                {t('contact_or_google')}
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeq9dtzCXJehscBCsEV5SCRak0NhiALIOLj6kf_rj50d-CYrQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all text-center font-medium mb-4"
              >
                {t('contact_google_btn')}
              </a>
              <div className="text-center text-sm text-gray-600 mb-4">
                {t('contact_or_direct')}
              </div>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('contact_telegram')}</span>
                </button>
                <button className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('contact_whatsapp')}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}