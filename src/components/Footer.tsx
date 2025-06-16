
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center text-gray-400">
        <p className="font-bold text-lg mb-3 sm:mb-4 text-white">Contáctanos</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-4">
          <a href="mailto:contacto@arriendosfyc.cl" className="flex items-center gap-2 hover:text-brand-yellow transition-colors text-sm sm:text-base">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>contacto@arriendosfyc.cl</span>
          </a>
          <a href="tel:+56912345678" className="flex items-center gap-2 hover:text-brand-yellow transition-colors text-sm sm:text-base">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>+56 9 1234 5678</span>
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Arriendos F&C. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
