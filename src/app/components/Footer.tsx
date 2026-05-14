import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next"; 
import EngineeringAcademyLogo from "./Navbar";

export function Footer() {
  const { t } = useTranslation(); 

  return (
    <footer className="py-16 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-4">
              <EngineeringAcademyLogo />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              {t('footer_desc')}
            </p>
            <div className="flex items-center space-x-4 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Komitas 59</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600 mt-3">
              <Mail className="w-5 h-5" />
              <span>hello@engineering-academy.com</span>
            </div>
          </div>
          <div className="flex justify-end">
          
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          {t('footer_rights')}
        </div>
      </div>
    </footer>
  );
}